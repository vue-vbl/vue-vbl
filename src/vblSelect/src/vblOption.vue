<template>
    <li class="vbl-option" :class="classes" @click="onChange(true)">
        <slot></slot>
    </li>
</template>

<script>
    import optionMixin from './optionMixin';
    
    export default {
        name: 'vbl-option',
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
    .vbl-option {
        height: 28px;
        line-height: 28px;
        padding: 0 8px;
        overflow: hidden;
        color: #000;
        &:hover {
            background: #ebf7ff;
        }
        &.is-selected {
            background: #ebf7ff;
        }
        &.is-disabled {
            background: #f9f9f9;
        }
        &.is-disabled:hover {
            background: #f9f9f9;
        }
    }
</style>