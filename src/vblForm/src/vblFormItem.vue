<template>
    <div class="vbl-form-item" :class="{'is-inline': inline, 'is-error': formErrors.has(computedName)}">
        <slot></slot>
        <p class="error-msg">{{formErrors.first(computedName)}}</p>
    </div>
</template>

<script>
    export default {
        name: 'vbl-form-item',
        inject: ['formName', 'formErrors'],
        props: {
            name: String,
            inline: Boolean
        },
        computed: {
            computedName() {
                return `${this.formName}.${this.name}`;
            }
        }
    };
</script>

<style lang="less">
    .vbl-form-item {
        &.is-inline {
            display: inline-block;
        }
        .error-msg {
            display: none;
            margin-top: 4px;
            color: #e9474d;
            line-height: 1;
        }
        &.is-error {
            .error-msg {
                display: block;
            }
            .vbl-select .selected,
            .vbl-multi-select .selected,
            .vbl-textarea,
            .vbl-input input,
            .vbl-input .icon-wrap {
                border-color: #e9474d;
            }
        }
    }
</style>