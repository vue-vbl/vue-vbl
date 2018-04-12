<template>
    <div class="vbl-select" :class="{'is-disabled': disabled, 'is-show': show}">
        <div class="select-mark">
            <vbl-icon type="ion-arrow-down-b"></vbl-icon>
        </div>
        <div class="selected" @click="!disabled && (show = !show)">
            {{dataText || placeholder}}
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
        name: 'vbl-select',
        mixins: [dropdownMixin],
        props: {
            value: {
                type: [String, Number, Boolean, Object]
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
                dataText: ''
            };  
        },
        watch: {
            value(val) {
                this.dataValue = val;
                this.init();
            },
            dataValue(val) {
                this.$emit('input', val);
            }
        },
        methods: {
            updateValue(val) {
                this.dataValue = val;
                this.show = false;
            },
            init() {
                this.dataText = '';
                this.$children.forEach((child) => {
                    if (child.disabled) {
                        return;
                    }
                    if (this.dataValue === child.value) {
                        child.isChecked = true;
                        this.dataText = child.$el.innerText;
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
    .vbl-select {
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
            top: 0;
            padding: 8px;
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
            background: #fff;
            border: 1px solid #e1e1e1;
            color: #000;
            height: 28px;
            line-height: 28px;
            padding: 0 24px 0 8px;
            margin: 0;
            border-radius: 4px;
            cursor: pointer;
        }
        .selected:hover {
            border: 1px solid #0e75e1;
        }
        .selected:active {
            border: 1px solid #0e75e1;
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
