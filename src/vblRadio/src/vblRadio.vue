<template>
    <label class="vbl-radio" 
        :class="{'is-disabled': disabled}">
        <input type="radio"
            :disabled="disabled"
            :value="nativeValue"
            v-model="dataValue"/>
        <span class="check"></span>
        <span class="control-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'vbl-radio',
        props: {
            value: {
                type: [String, Number, Boolean, Object]
            },
            nativeValue: {
                type: [String, Number, Boolean, Object],
                default: null
            },
            disabled: {
                type: Boolean,
                default: false
            }  
        },
        data() {
            return {
                dataValue: this.value
            };
        },
        watch: {
            value(val) {
                this.dataValue = val;
            },
            dataValue(val) {
                this.$emit('input', val);
            }
        }
    };
</script>

<style lang="less">
    .vbl-radio {
        vertical-align: middle;
        display: inline-block;
        position: relative;
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        box-sizing: initial;
        +.vbl-radio {
            margin-left: 20px;
        }
        &.is-disabled .check {
            background-color: #f9f9f9;
            border-color: #d7d7d7;
        }
        .control-label {
            margin-left: 6px;
        }
        .check {
            display: inline-block;
            width: 12px;
            height: 12px;
            position: relative;
            top: 3px;
            left: 0;
            background-color: #fff;
            border: 1px solid #dddee1;
            border-radius: 50%;
            transition: all .2s ease-in-out;
        }
        input[type="radio"] {
            display: none;
        }
        input:checked ~ .control-label {
            color: #1d86f4;
        }
        input:checked ~ .check {
            color: #1d86f4;
            border-color: #1d86f4;
            &:after {
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
        }
    }
</style>
