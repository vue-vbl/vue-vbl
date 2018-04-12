<template>
    <label class="vbl-checkbox" 
        :class="[{'is-disabled': disabled}]">
        <input type="checkbox"
            v-model="dataValue"
            :value="nativeValue"
            :true-value="trueValue"
            :false-value="falseValue"
            :disabled="disabled"
            @change="$emit('change', $event)"/>
        <span class="check"></span>
        <span class="control-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'vbl-checkbox',
        props: {
            value: {
                type: [String, Number, Boolean, Array]
            },
            nativeValue: {
                type: [String, Number, Boolean, Object],
                default: null
            },
            trueValue: {
                type: [String, Number, Boolean, Object],
                default: true  
            },
            falseValue: {
                type: [String, Number, Boolean, Object],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            var val = this.value;
            if (this.nativeValue !== null && !val) {
                val = [];
            }
            return {
                dataValue: val
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
    .vbl-checkbox {
        display: inline-block;
        vertical-align: middle;
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        line-height: 1;
        position: relative;
        box-sizing: initial;
        +.vbl-checkbox {
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
            position: relative;
            top: 3px;
            left: 0;
            width: 12px;
            height: 12px;
            border: 1px solid #dddee1;
            border-radius: 2px;
            background-color: #fff;
            transition: border-color .2s ease-in-out, background-color .2s ease-in-out;
        }
        input[type="checkbox"] {
            display: none;
        }
        input:checked ~ .control-label {
            color: #1d86f4;
        }
        input:checked ~ .check {
            background-color: #1d86f4;
            border-color: #1d86f4;
            &:after {
                content: "";
                width: 4px;
                height: 8px;
                position: absolute;
                left: 3px;
                border: 2px solid #fff;
                border-top: 0;
                border-left: 0;
                transform: rotate(45deg) scale(.8);
                transition: all .2s ease-in-out;
            }
        }
    }
</style>