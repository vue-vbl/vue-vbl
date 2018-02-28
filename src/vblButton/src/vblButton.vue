<template>
    <button class="vbl-button" 
        :class="classes"
        :type="type"
        :disabled="disabled" 
        @click="onClick">
        <vbl-icon v-if="icon" :type="icon"></vbl-icon>
        <span><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'vbl-button',
        props: {
            theme: {
                type: String,
                default: ''
            },
            large: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'button'
            },
            icon: {
                type: String,
                default: ''
            }
        },
        computed: {
            classes() {
                return {
                    [`theme-${this.theme}`]: this.theme,
                    'is-large': this.large,
                    'is-disabled': this.disabled
                };
            }
        },
        methods: {
            onClick(e) {
                if (!this.disabled) {
                    this.$emit('click');
                } else {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        }
    };
</script>

<style lang="less">
    .vbl-button {
        border-radius: 2px;
        font-size: 14px;
        height: 28px;
        padding: 0 16px;
        background: #1d86f4;
        color: #fff;
        border: 1px solid #1d86f4;
        cursor: pointer;
        white-space: nowrap;
        .vbl-icon {
            margin-right: 6px;
        }
        .vbl-icon,
        span {
            vertical-align: middle;
            line-height: normal;
        }
        &:hover {
            background: #0e75e1;
        }
        &.is-large {
            height: 42px;
            border-radius: 4px;
            font-size: 16px;
            text-align: center;
            box-sizing: border-box;
            min-width: 120px;
        }
        &.theme-secondary {
            background: #fff;
            border: 1px solid #d7d7d7;
            color: #333;
        }
        &.theme-secondary:hover {
            background: #f0f0f0;
        }
        &.theme-light-secondary {
            background: #fff;
            border: 1px solid #badcff;
            color: #1d86f4;
        }
        &.theme-light-secondary:hover {
            background: #f2f8ff;
        }
        &.is-disabled {
            background: #f0f0f0;
            border: 1px solid #d5d5d5;
            color: #000;
        }
        &.is-disabled:hover {
            background: #f0f0f0;
            border: 1px solid #d5d5d5;
            color: #000;
        }
    }
</style>