<template>
    <div class="vbl-loading">       
        <transition name="fade">
            <div v-if="show">
                <div class="mask"></div>
                <div class="vbl-loading-content">
                    <vbl-icon class="loading-rotate" 
                        type="ion-load-c"
                        size="50"></vbl-icon>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'vbl-loading',
        data() {
            return {
                show: true
            };
        },
        methods: {
            destroy() {
                this.show = false;
                this.$destroy();
                this.$el.remove();
            }
        },
        beforeMount() {
            if (!document.querySelector('.vbl-loading')) {
                document.body.appendChild(this.$el);
            }
        }
    };
</script>

<style lang="less">
    .vbl-loading {
        position: relative;
        z-index: 999;
        .mask {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(55,55,55,.6);
            height: 100%;
            z-index: 1;
        }
        .vbl-loading-content {
            position: fixed;
            top: 50%;
            left: 50%;
            z-index: 2;
            width: 90px;
            height: 90px;
            margin: -45px 0 0 -45px;
         }
        .loading-rotate {
            color: #fff;
            animation: rotate 1s infinite linear;
         }
         @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(180deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
</style>