<template>
    <div class="vbl-dropdown">
        <div @click="show = !show"><slot></slot></div>
        <transition name="fade">
            <div class="dropdown-content" v-show="show">
                <slot name="content"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    import {dropdownMixin} from 'vbl.utils';
    
    export default {
        name: 'vbl-dropdown',
        mixins: [dropdownMixin]
    };
</script>

<style lang="less">
    .vbl-dropdown {
        position: relative;
        display: inline-block;
        .dropdown-content {
            position: absolute;
            z-index: 999;
            min-width: 100%;
            background: #fff;
            border: 1px solid #eee;
            border-radius: 4px;
            box-shadow: 0 1px 20px rgba(0, 0, 0, .1);
            padding: 6px;
            box-sizing: border-box;
            line-height: 18px;
        }
    }
</style>
