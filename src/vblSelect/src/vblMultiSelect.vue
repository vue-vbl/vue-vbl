<template>
    <div class="vbl-multi-select" :class="{'is-disabled': disabled, 'is-show': show}">
        <div @click="!disabled && (show = !show)">
            <div class="select-mark">
                <vbl-icon type="ion-arrow-down-b"></vbl-icon>
            </div>
            <div class="selected">
                <span class="selected-placeholder" v-if="!selected.length">{{placeholder}}</span>
                <div class="selected-items" v-if="selected.length">
                    <span class="selected-item" v-for="item in selected" @click.stop>
                        <vbl-icon type="ion-ios-close-empty" size="18" @click="close(item)"></vbl-icon>
                        {{item.$el.innerText}}
                    </span>
                </div>
            </div>
        </div>
        <transition name="fade">
            <ul class="list" v-show="show">
                <slot></slot>
            </ul>
        </transition>
    </div>
</template>

<script>
    import {dropdownMixin} from 'vbl.utils';
    
    export default {
        name: 'vbl-multi-select',
        mixins: [dropdownMixin],
        props: {
            value: {
                type: Array,
                default: () => []
            },
            placeholder: {
                type: String,
                default: '请选择'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                dataValue: this.value,
                selected: []
            };  
        },
        watch: {
            value(val) {
                this.dataValue = val;
                this.init();
            },
            dataValue(val) {
                this.$emit('input', val);
                this.$emit('change', val);
            }
        },
        methods: {
            updateValue(val, isChecked) {
                var index = this.dataValue.indexOf(val);
                if (isChecked) {
                    if (index < 0) {
                        this.dataValue.push(val);
                    }
                } else {
                    if (index >= 0) {
                        this.dataValue.splice(index, 1);
                    }
                }
                this.show = false;
            },
            close(item) {
                item.onChange(false);
            },
            init() {
                this.selected = [];
                this.$children.forEach((child) => {
                    if (child.disabled) {
                        return;
                    }
                    if (this.dataValue.indexOf(child.value) > -1) {
                        child.isChecked = true;
                        this.selected.push(child);
                    } else {
                        child.isChecked = false;
                    }
                });
            }
        },
        mounted (){
            this.init();
        }
    };
</script>

<style lang="less">
    .vbl-multi-select {
        width: 100%;
        box-sizing: border-box;
        background-color: #fff;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        display: inline-block;
        .select-mark .vbl-icon {
            position: absolute;
            right: 0;
            top: 50%;
            padding: 8px;
            margin-top: -14px;
            transition: all .2s ease-in-out;
            line-height: normal;
        }
        &.is-show {
            z-index: 1000;
            .select-mark .vbl-icon {
                transform: rotate(180deg);
            }
        }
        &.is-disabled {
            .selected {
                background: #f9f9f9;
            }
            .selected:hover {
                border: 1px solid #e1e1e1;
            }
        }
        .selected {
            overflow: hidden;
            background: #fff;
            border: 1px solid #e1e1e1;
            color: #000;
            min-height: 26px;
            line-height: 26px;
            padding: 0 24px 0 3px;
            margin: 0;
            border-radius: 4px;
            cursor: pointer;
        }
        .selected-items {
            overflow: hidden;
            padding-bottom: 3px;
        }
        .selected:hover {
            border: 1px solid #0e75e1;
        }
        .selected:active {
            border: 1px solid #0e75e1;
        }
        .selected-placeholder {
            padding-left: 5px;
        }
        .selected-item .vbl-icon {
            position: absolute;
            right: 0;
            top: -1px;
            padding: 0 4px;
            color: #666;
            line-height: normal;
        }
        .selected-item {
            float: left;
            position: relative;
            line-height: 18px;
            margin: 3px 4px 0 0;
            padding: 0 20px 0 8px;
            border: 1px solid #e9eaec;
            border-radius: 3px;
            background: #f7f7f7;
            font-size: 12px;
            vertical-align: middle;
            opacity: 1;
            overflow: hidden;
            cursor: pointer;
        }
        .list:before {
            content: '';
            border: none;
        }
        .list:after {
            content: '';
            border: none;
        }
        .list {
            margin: 8 0;
            width: 100%;
            position: absolute;
            background: #fff;
            margin: 0;
            padding: 8px 0;
            min-width: 96px;
            border: 1px solid #eee;
            border-radius: 4px;
            box-shadow: 0 1px 6px rgba(0,0,0,.2);
        }
    }
</style>
