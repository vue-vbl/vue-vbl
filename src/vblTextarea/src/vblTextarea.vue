<template>
    <textarea class="vbl-textarea"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :value="dataValue"
        @input="onInput"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur">
    </textarea>
</template>

<script>
    import {inputTextMixin} from 'vbl.utils';
    
    export default {
        name: 'vbl-textarea',
        mixins: [inputTextMixin]
    };
</script>

<style lang="less">
    .vbl-textarea {
        width: 100%;
        height: 76px;
        border: 1px solid #e1e1e1;
        padding: 4px 8px;
        line-height: 1.5;
        color: #000;
        border-radius: 4px;
        font-size: 12px;
        box-sizing: border-box;
        vertical-align: bottom;
        &:focus {
            outline: none;
        }
        &:hover {
            border: 1px solid #0e75e1;
        }
        &::-webkit-input-placeholder {
            /* placeholder颜色  */
            color: #ababab;
        }
        &[disabled] {
            border: 1px solid #d7d7d7;
            background-color: #f9f9f9;
        }
    }
</style>
