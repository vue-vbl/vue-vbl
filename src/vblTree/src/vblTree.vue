<template>
    <div class="vbl-tree" :class="{'has-check': type}">
        <ul :id="id" class="ztree"></ul>
    </div>
</template>

<script>
    import 'ztree';
    import {uniqueId} from 'vbl.utils';
    
    export default {
        name: 'vbl-tree',
        props: {
            checked: {
                type: Object,
                default: () => ({
                    name: [],
                    value: []
                })
            },
            type: {
                type: String,
                default: '' // radio or checkbox
            },
            list: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                dataChecked: this.checked,
                id: uniqueId('tree')
            };
        },
        computed: {
            setting() {
                var ztree = {
                    data: {
                        simpleData: {
                            enable: true
                        }
                    }
                };
                if (this.type === 'radio') {
                    ztree = Object.assign(ztree, {
                        check: {
                            enable: true,
                            chkStyle: 'radio',
                            radioType: 'all'
                        },
                        callback: {
                           onCheck: this.onCheck
                        }
                    });
                } else if (this.type === 'checkbox') {
                    ztree = Object.assign(ztree, {
                        check: {
                            enable: true,
                            chkStyle: 'checkbox'
                        },
                        callback: {
                           onCheck: this.onCheck
                        }
                    });
                } else {
                    ztree = Object.assign(ztree, {
                        callback: {
                           onClick: this.onClick
                        }
                    });
                }
                
                return ztree;
            }
        },
        watch: {
            list: {
                deep: true,
                handler(val) {
                    this.init();
                } 
            },
            checked: {
                deep: true,
                handler(val) {
                    this.dataChecked = val;
                    this.setChecked();
                } 
            },
            dataChecked: {
                deep: true,
                handler(val) {
                    this.$emit('update:checked', val);
                    this.$emit('change', val);
                } 
            }
        },
        methods: {
            init() {
                $.fn.zTree.init($(`#${this.id}`), this.setting, this.list);
            },
            setChecked() {
                var zTree = $.fn.zTree.getZTreeObj(this.id);
                var checkArr = this.dataChecked.value;
                for (var n = 0; n < this.list.length; n++) {//循环所有节点
                    var checkS = false;
                    var tNode = this.list[n];//当前节点
                    var node = zTree.getNodeByParam('id', tNode.id);
                    for (var i = checkArr.length - 1; i >= 0; i--) {
                        if (checkArr[i] === tNode.id) {
                            zTree.selectNode(node);
                            zTree.checkNode(node, true, false);
                            break;
                        }
                    }
                }
            },
            onCheck() {
                var zTree = $.fn.zTree.getZTreeObj(this.id);
                var nodes = zTree.getCheckedNodes(true);
                var isCheckbox = this.setting.check && 
                    this.setting.check.chkStyle === 'checkbox';
                
                if (isCheckbox) {
                    this.dataChecked = {
                        value: nodes.map(v => v.id),
                        name: nodes.map(v => v.name)
                    };
                } else {
                    this.dataChecked = {
                        value: [nodes[nodes.length - 1].id],
                        name: [nodes[nodes.length - 1].name]
                    };
                }
            },
            onClick() {
                var zTree = $.fn.zTree.getZTreeObj(this.id);
                var nodes = zTree.getSelectedNodes();
                var v = '';
                var d = '';
                nodes.sort(function compare(a,b){return a.id-b.id;});
                for (var i= 0, l = nodes.length; i < l; i++) {
                    v = nodes[i].name + ',';
                    d = nodes[i].id + ',';
                }
                if (v.length > 0) v = v.substring(0, v.length-1);
                if (d.length > 0) d = d.substring(0, d.length-1);
                
                this.dataChecked = {
                    value: d,
                    name: v
                };
            }
        },
        mounted() {
            this.init();
            this.setChecked();
        },
        beforeDestroy() {
            $.fn.zTree.destroy(this.id);
        }
    };
</script>

<style lang="less">
    @import '~ztree/css/zTreeStyle/zTreeStyle.css';

    .vbl-tree {
        .ztree {
            padding: 0;
            box-sizing: initial;
        }
        .ztree * {
            font-family: inherit;
            color: #000;
        }
        .ztree li li {
            margin-top: 4px;
        }
        .ztree .node_name {
            vertical-align: middle;
        }
        .ztree li span.button.bottom_docu,
        .ztree li ul.line,
        .ztree li span.button.center_docu {
            background: none;
        }
        .ztree li span.button.bottom_close,
        .ztree li span.button.center_close,
        .ztree li span.button.root_close,
        .ztree li span.button.roots_close {
            background: url(./images/tree.png) -3px -29px;
        }
        .ztree li span.button.center_open,
        .ztree li span.button.bottom_open,
        .ztree li span.button.root_open,
        .ztree li span.button.roots_open {
            background: url(./images/tree.png) -3px -46px;
        }
        .ztree li a {
            padding: 6px;
            height: auto;
            vertical-align: middle;
        }
        .ztree li span.button.ico_close,
        .ztree li span.button.ico_open {
            background: url(./images/tree.png) -21px -46px;
        }
        .ztree li span.button.ico_docu{
            background: url(./images/tree.png) -52px -45px;
        }
        .ztree li span.button {
            vertical-align: middle;
            background: url(./images/tree.png)  2px -70px;
        }
        .ztree li span.button.edit {
            background: url(./images/tree.png) -15px -70px;
            vertical-align: middle;
        }
        .ztree li span.button.remove {
            background: url(./images/tree.png) -34px -70px;
            vertical-align: middle;
        }
        .ztree li a.curSelectedNode {
            background: #ebf7ff;
            border: none;
            opacity: 1;
        }
        &.has-check .ztree li a:hover {
            text-decoration: none;
            cursor: default;
        }
        &.has-check .ztree li a.curSelectedNode {
            background: #fff;
        }
        .ztree li span.button.chk.checkbox_true_part_focus,
        .ztree li span.button.chk.checkbox_true_part,
        .ztree li span.button.chk.checkbox_true_full_focus,
        .ztree li span.button.chk.checkbox_true_full,
        .ztree li span.button.chk.checkbox_false_part_focus,
        .ztree li span.button.chk.checkbox_false_part,
        .ztree li span.button.chk.checkbox_false_full_focus,
        .ztree li span.button.chk.checkbox_false_full {
            display: inline-block;
            width: 12px;
            height: 12px;
            position: relative;
            left: 0;
            border: 1px solid #dddee1;
            border-radius: 2px;
            background-color: #fff;
            background-image: none;
            transition: border-color .2s ease-in-out, background-color .2s ease-in-out;
            cursor: pointer;
            vertical-align: middle;
        }
        .ztree li span.button.chk.checkbox_true_part_focus,
        .ztree li span.button.chk.checkbox_true_part,
        .ztree li span.button.chk.checkbox_true_full_focus,
        .ztree li span.button.chk.checkbox_true_full {
            background-color: #1d86f4;
            border-color: #1d86f4;
        }
        .ztree li span.button.chk.checkbox_true_part_focus:after,
        .ztree li span.button.chk.checkbox_true_part:after,
        .ztree li span.button.chk.checkbox_true_full_focus:after,
        .ztree li span.button.chk.checkbox_true_full:after {
            content: "";
            display: table;
            width: 4px;
            height: 8px;
            position: absolute;
            top: 0;
            left: 3px;
            border: 2px solid #fff;
            border-top: 0;
            border-left: 0;
            transform: rotate(45deg) scale(.8);
            transition: all .2s ease-in-out;
        }
        .ztree li span.button.chk.checkbox_true_part_focus,
        .ztree li span.button.chk.checkbox_true_part,
        .ztree li span.button.chk.checkbox_false_part_focus,
        .ztree li span.button.chk.checkbox_false_part {
            opacity: .6;
        }
        .ztree li span.button.chk.radio_true_part_focus,
        .ztree li span.button.chk.radio_true_part,
        .ztree li span.button.chk.radio_true_full_focus,
        .ztree li span.button.chk.radio_true_full,
        .ztree li span.button.chk.radio_false_part_focus,
        .ztree li span.button.chk.radio_false_part,
        .ztree li span.button.chk.radio_false_full_focus,
        .ztree li span.button.chk.radio_false_full {
            display: inline-block;
            width: 12px;
            height: 12px;
            position: relative;
            background-color: #fff;
            border: 1px solid #dddee1;
            border-radius: 50%;
            transition: all .2s ease-in-out;
            background-image: none;
            cursor: pointer;
        }
        .ztree li span.button.chk.radio_true_part_focus,
        .ztree li span.button.chk.radio_true_part,
        .ztree li span.button.chk.radio_true_full_focus,
        .ztree li span.button.chk.radio_true_full {
            color: #1d86f4;
            border-color: #1d86f4;
        }
        .ztree li span.button.chk.radio_true_part_focus:after,
        .ztree li span.button.chk.radio_true_part:after,
        .ztree li span.button.chk.radio_true_full_focus:after,
        .ztree li span.button.chk.radio_true_full:after {
            position: absolute;
            width: 8px;
            height: 8px;
            left: 2px;
            top: 2px;
            border-radius: 6px;
            display: table;
            border-top: 0;
            border-left: 0;
            content: " ";
            background-color: #2d8cf0;
            opacity: 1;
            transform: scale(1);
            transition: all .2s ease-in-out;
        }
        .ztree li span.button.chk.radio_true_part_focus,
        .ztree li span.button.chk.radio_true_part,
        .ztree li span.button.chk.radio_false_part_focus,
        .ztree li span.button.chk.radio_false_part {
            opacity: .6;
        }
    }
</style>