<template>
    <div class="vbl-nav" :class="{'is-vertical': vertical}">
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'vbl-nav',
        props: {
            vertical: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style lang="less">
    .vbl-nav {
        user-select: none;
        overflow-x: auto;
        white-space: nowrap;
        ul {
            display: flex;
            border-bottom: 1px solid #1d86f4;
        }
        &.is-vertical {
            white-space: normal;
            ul {
                display: block;
                border-bottom: none;
                border-right: 1px solid #1d86f4;
            }
            a {
                margin: 0 -1px 0 0;
                padding: 15px 12px;
                &.router-link-exact-active {
                    padding: 12px;
                    background-color: #fff;
                    border-color: #1d86f4;
                    border-bottom-color: #1d86f4!important;
                    border-right-color: transparent!important;
                    color: #1d86f4;
                }
            }
            
        }
    }
</style>