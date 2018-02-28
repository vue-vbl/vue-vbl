<template>
    <i class="vbl-icon iconfont" 
        :class="type"
        :style="styles"
        @click="$emit('click')"></i>
</template>

<script>
    export default {
        name: 'vbl-icon',
        props: {
            type: {
                type: String,
                required: true
            },
            size: [Number, String],
            color: String
        },
        computed: {
            styles() {
                return [
                    this.size ? {'font-size': `${this.size}px`} : null,
                    this.color ? {'color': this.color} : null
                ];
            }
        }
    };
</script>

<style lang="less">
    @import './iconfont/ionicons.less';
</style>
