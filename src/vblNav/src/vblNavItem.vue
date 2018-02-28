<template>
    <li class="vbl-nav-item">
        <router-link :to="to"><slot></slot></router-link>
    </li>
</template>

<script>
    export default {
        name: 'vbl-nav-item',
        props: {
            to: {
                type: String
            }
        }
    };
</script>

<style lang="less">
    .vbl-nav-item {
        a {
            font-size: 14px;
            color: #000;
            padding: 12px 15px;
            margin-bottom: -1px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid transparent;
            vertical-align: top;
            &.router-link-exact-active {
                padding: 12px;
                background-color: #fff;
                border-color: #1d86f4;
                border-bottom-color: transparent!important;
                color: #1d86f4;
            }
        }
    }
</style>