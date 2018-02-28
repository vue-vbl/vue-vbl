<template>
    <span class="vbl-popover" :class="place" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
        <div ref="trigger"><slot></slot></div>
        <transition name="fade">
            <div ref="content" class="popover-content" v-show="show" :style="position">
                <div class="arrow"></div>
                <div class="popover-main">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </span>
</template>

<script>
    export default {
        name: 'vbl-popover',
        props: {
            place: {
                type: String,
                default: 'top'
            }
        },
        data() {
            return {
                show: false,
                position: {
                    top: 0,
                    left: 0
                }
            };
        },
        methods: {
            onMouseleave() {
                this.show = false;
            },
            onMouseenter() {
                this.show = true;
                
                this.$nextTick(() => {
                    var content = this.$refs.content;
                    var trigger = this.$refs.trigger;
                    var left;
                    var top;
                
                    switch (this.place) {
                        case 'top':
                            left = trigger.offsetLeft - content.offsetWidth / 2 + trigger.offsetWidth / 2;
                            top = trigger.offsetTop - content.offsetHeight;
                            break;
                        case 'left':
                            left = trigger.offsetLeft - content.offsetWidth;
                            top = trigger.offsetTop + trigger.offsetHeight / 2 - content.offsetHeight / 2;
                            break;
                        case 'right':
                            left = trigger.offsetLeft + trigger.offsetWidth;
                            top = trigger.offsetTop + trigger.offsetHeight / 2 - content.offsetHeight / 2;
                            break;
                        case 'bottom':
                            left = trigger.offsetLeft - content.offsetWidth / 2 + trigger.offsetWidth / 2;
                            top = trigger.offsetTop + trigger.offsetHeight;
                            break;
                    }
                    
                    this.position = {
                        left: `${left}px`,
                        top: `${top}px`
                    };
                });
            }
        }
    };
</script>

<style lang="less">
    .vbl-popover {
        display: inline-block;
        position: relative;
        &.top {
            .arrow {
                bottom: 1px;
                transform: rotate(180deg);
                left: 50%;
                margin-left: -6px;
            }
        }
        &.bottom {
            .arrow {
                top: 1px;
                left: 50%;
                margin-left: -6px;
            }
        }
        &.left {
            .arrow {
                top: 50%;
                right: -2px;
                transform: rotate(90deg);
                margin-top: -3px;
            }
        }
        &.right {
            .arrow {
                top: 50%;
                left: -2px;
                transform: rotate(-90deg);
                margin-top: -3px;
            }
        }
        .arrow {
            position: absolute;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #eee;
            content: " ";
            display: block;
            width: 0;
            height: 0;
        }
        .arrow:after {
            position: absolute;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid #fff;
            content: " ";
            display: block;
            width: 0;
            height: 0;
            top: 1px;
            left: -5px;
        }
        .popover-content {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 999;
        }
        .popover-main {
            background: #fff;
            border: 1px solid #eee;
            border-radius: 4px;
            box-shadow: 0 1px 20px rgba(0, 0, 0, .1);
            padding: 6px;
            margin: 6px;
            box-sizing: border-box;
            line-height: 18px;
        }
    }
</style>
