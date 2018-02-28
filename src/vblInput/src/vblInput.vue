<template>
    <div class="vbl-input" 
        :class="{
            'is-disabled': disabled,
            'has-icon': icon, 
            'has-clear': !disabled && clear && dataValue
        }">
        <span class="input-wrap">
            <input ref="input" :type="type" 
                :placeholder="placeholder"
                :disabled="disabled" 
                :readonly="readonly" 
                :value="dataValue" 
                @input="onInput"
                @change="onChange"
                @focus="onFocus"
                @blur="onBlur"/>
            <vbl-icon type="ion-ios-close-empty" size="30" @click="onClear"></vbl-icon>
        </span>
        <span v-if="icon" 
            class="icon-wrap" 
            @click="!disabled && $emit('click-icon')">
            <vbl-icon :type="icon"></vbl-icon>
        </span>
    </div>
</template>

<script>
    import {inputTextMixin} from 'vbl.utils';
    
    export default {
        name: 'vbl-input',
        mixins: [inputTextMixin],
        props: {
            type: {
                type: String,
                default: 'text'
            },
            icon: {
                type: String
            },
            clear: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClear() {
                this.$emit('input', '');
                this.$emit('clear');
            }
        }
    };
</script>

<style lang="less">
    .vbl-input {
        display: inline-block;
        width: 100%;
        .input-wrap {
            position: relative;
            display: block;
            .vbl-icon {
                display: none;
                position: absolute;
                right: 0;
                top: 0;
                padding: 0 6px;
                cursor: pointer;
                color: #666;
            }
        }
        &.has-clear {
            .input-wrap:hover {
                .vbl-icon {
                    display: inherit;
                }
                input {
                    padding-right: 25px;
                }
            }
        }
        &.has-icon {
            display: table;
            .input-wrap {
                display: table-cell;
                input {
                    border-bottom-right-radius: 0;
                    border-top-right-radius: 0;
                }
            }
            .icon-wrap {
                display: table-cell;
                width: 1px;
                white-space: nowrap;
                vertical-align: middle;
                padding: 4px 10px;
                background: #f9f9f9;
                border: 1px solid #e1e1e1;
                border-left: none;
                border-bottom-right-radius: 4px;
                border-top-right-radius: 4px;
            }
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        input[type="number"]{
            -moz-appearance: textfield;
        }
        input {
            border: 1px solid #e1e1e1;
            padding: 4px 8px;
            line-height: 1.5;
            color: #000;
            border-radius: 4px;
            width: 100%;
            box-sizing: border-box;
            font-size: 12px;
            &:focus {
                outline: none;
            }
            &:hover {
                border: 1px solid #0e75e1;
            }
            &::-webkit-input-placeholder {
                color: #ababab;
            }
            &[disabled] {
                border: 1px solid #d7d7d7;
                background-color: #f9f9f9;
            }
        }
    }
</style>
