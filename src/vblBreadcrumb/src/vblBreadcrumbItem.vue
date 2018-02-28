<template>
    <span class="vbl-breadcrumb-item">
        <span v-if="to">
            <router-link :to="to"><slot></slot></router-link>
            <span class="separator">{{separator}}</span>
        </span>
        <span class="active" v-else><slot></slot></span>
    </span>
</template>

<script>
    export default {
        name: 'vbl-breadcrumb-item',
        inject: ['separator'],
        props: {
            to: {
                type: String
            }
        }
    };
</script>

<style lang="less">
    .vbl-breadcrumb-item {
        font-size: 14px;
        color: #666;
        a {
            color: #666;
            &:hover {
               color: #1d86f4; 
            }
        }
        .separator {
            font-family: simsun;
            margin: 0 10px;
            color: #ccc;
        }
    }
</style>