<template>
    <div class="vbl-alert">
        <transition enter-active-class="fadeInDown" leave-active-class="fadeOutUp">
            <div class="vbl-alert-content" v-if="show">
                <vbl-icon :type="iconType"></vbl-icon>
                {{content}}
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'vbl-alert',
        props: {
            content: String,
            type: {
                type: String,
                default: 'info'
            },
            duration: {
                type: Number,
                default: 3000
            }
        },
        data() {
            return {
                show: false
            };
        },
        computed: {
            iconType() {
                switch(this.type) {
                    case 'info':
                        return 'ion-ios-information-outline';
                    case 'error':
                        return 'ion-ios-close-outline';
                    case 'success':
                        return 'ion-ios-checkmark-outline';
                    default:
                        return null;
                }
            }
        },
        methods: {
            close() {
                clearTimeout(this.timer);
                this.show = false;
                this.$destroy();
                this.$el.remove();
            }
        },
        beforeMount() {
            if (!document.querySelector('.vbl-alert')) {
                document.body.appendChild(this.$el);
            }
        },
        mounted() {
            this.show = true;
            
            this.timer = setTimeout(() => {
                this.close();
            }, this.duration);
        }
    };
</script>

<style lang="less">
    .vbl-alert {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        margin: 0 auto;
        outline: 0;
        clear: both;
        overflow: hidden;
        box-sizing: border-box;
        display: -webkit-box;
        dislay: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        .vbl-alert-content {
            min-width: 310px;
            height: 80px;
            margin-top: 20px;
            padding-right: 20px;
            color: #fffefe;
            box-sizing: border-box;
            line-height: 80px;
            background: rgba(0, 0, 0, .8);
            border-radius: 4px;
            font-size: 18px;
            .vbl-icon {
                margin: 0 20px;
                float: left;
                display: inline-block;
                width: 40px;
                height: 80px;
                line-height: 80px;
                box-sizing: border-box;
                font-size: 50px;
                color: #fffefe;
            }
        }
    }
</style>