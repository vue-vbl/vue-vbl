<template>
    <li class="vbl-multi-option" :class="classes" @click="onChange(!isChecked)">
        <span class="selected-icon"></span><slot></slot>
    </li>
</template>

<script>
    import optionMixin from './optionMixin';
    
    export default {
        name: 'vbl-multi-option',
        mixins: [optionMixin],
        computed: {
            classes() {
                return [
                    {'is-selected': this.isChecked}, 
                    {'is-disabled': this.disabled}
                ];
            }
        }
    };
</script>

<style lang="less">
    .vbl-multi-option {
        height: 28px;
        line-height: 28px;
        padding: 0 8px;
        overflow: hidden;
        position: relative;
        color: #000;
        &:hover {
            background: #ebf7ff;
        }
        &.is-selected {
            color: #1d86f4;
            .selected-icon {
                display: inherit;
            }
        }
        &.is-disabled {
            background: #f9f9f9;
        }
        &.is-disabled:hover {
            background: #f9f9f9;
        }
        .selected-icon {
            float: right;
            display: none;
        }
        .selected-icon:after {
            content: "";
            width: 6px;
            height: 10px;
            position: absolute;
            right: 10px;
            top: 7px;
            border: 2px solid #1d86f4;
            border-top: 0;
            border-left: 0;
            transform: rotate(45deg) scale(.8);
            transition: all .2s ease-in-out;
        }
    }
</style>