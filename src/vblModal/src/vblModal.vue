<template>
    <div class="vbl-modal" 
        :class="{
            'is-alert': alert,
            'is-prompt': prompt,
            'is-img': img
        }">       
        <transition name="zoom-in">
            <div v-if="dataShow">
                <div class="mask"></div>
                <div class="vbl-modal-content-wrap"
                    :class="{'vertical-center': verticalCenter}" 
                    @click.self="onClickModal">
                    <vbl-icon v-if="img" 
                        class="vbl-modal-close"
                        type="ion-ios-close-empty"
                        size="30"
                        @click="onCancel"></vbl-icon>
                    <div class="vbl-modal-content animation-content"
                        :style="{'width': contentWidth}">
                        <div v-if="!hideHeader" class="vbl-modal-header">
                            <vbl-icon class="vbl-modal-close" 
                                type="ion-ios-close-empty"
                                size="30" 
                                @click="onCancel"></vbl-icon>
                            <div class="vbl-modal-title">{{title}}</div>
                        </div>
                        <div class="vbl-modal-body">
                            <div v-if="content">{{content}}</div>
                            <div v-else-if="src">
                                <img :src="src"/>
                            </div>
                            <slot v-else></slot>
                        </div>
                        <div class="vbl-modal-footer" v-if="!hideFooter">
                            <vbl-button @click="onOk">
                                {{okText}}
                            </vbl-button>
                            <vbl-button v-if="!hideCancel" 
                                theme="secondary" 
                                @click="onCancel('button')">
                                {{cancelText}}
                            </vbl-button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'vbl-modal',
        props: {
            width: {
                type: [String, Number]
            },
            show: {
                type: Boolean,
                default: false
            },
            verticalCenter: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: '标题'
            },
            okText: {
                type: String,
                default: '确认'
            },
            buttonSetShow: {
                type: Boolean,
                default: true
            },
            maskSetShow: {
                type: Boolean,
                default: true
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            hideHeader: {
                type: Boolean,
                default: false
            },
            hideFooter: {
                type: Boolean,
                default: false
            },
            hideCancel: {
                type: Boolean,
                default: false
            },
            /*
             * $modal
             */
            global: {
                type: Boolean,
                default: false
            },
            alert: {
                type: Boolean,
                default: false
            },
            prompt: {
                type: Boolean,
                default: false
            },
            content: {
                type: String,
                default: ''
            },
            
            img: {
                type: Boolean,
                default: false
            },
            src: {
                type: String,
                default: ''
            },
            
            okCallback: {
                type: Function
            },
            cancelCallback: {
                type: Function
            }
        },
        data() {
            return {
                dataShow: this.show || false
            };
        },
        computed: {
            contentWidth() {
                if (this.width) {
                    return `${this.width}px`;
                }
                return 'auto';
            }
        },
        watch: {
            show(val) {
                this.dataShow = val;
            },
            dataShow(val) {
                this.$emit('update:show', val);
                if (val) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }
        },
        methods: {
            onCancel(target) {
                if (target === 'button') {
                    if (this.buttonSetShow) {
                        this.dataShow = false;
                    }
                    this.$emit('cancel');
                } else {
                    this.dataShow = false;
                }
                if (this.global) {
                    if (this.cancelCallback) {
                        this.cancelCallback();
                    }
                    setTimeout(() => {
                        this.$destroy();
                        this.$el.remove();
                    }, 150);
                }
            },
            onOk() {
                if (this.buttonSetShow) {
                    this.dataShow = false;
                }
                this.$emit('ok');
                if (this.global) {
                    if (this.okCallback) {
                        this.okCallback();
                    }
                }
            },
            onClickModal(e) {
                if (!this.maskSetShow) {
                    return;
                }
                this.onCancel();
            }
        },
        beforeMount() {
            if (this.global) {
                document.body.appendChild(this.$el);
            }
        },
        mounted() {
            if (this.global) {
                this.dataShow = true;
            }
        },
        beforeDestroy() {
            document.body.style.overflow = '';
        }
    };
</script>

<style lang="less">
    .vbl-modal {
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
        .vbl-modal-content-wrap {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            z-index: 1;
            marign: 0 auto;
            overflow: auto;
            display: flex;
            justify-content: center;
            align-items: start;
            &.vertical-center {
                align-items: center;
                .vbl-modal-content {
                    margin: 30px;
                }
            }
            .vbl-modal-content {
                margin: 100px 30px;
                position: relative;
                outline: 0;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #eee;
                z-index: 1000;
                box-shadow: 0 0 20px rgba(0, 0, 0, .2);
                border-radius: 4px;
                .vbl-modal-header {
                    height: 35px;
                    line-height: 1;
                    background: #f5f7f9;
                    .vbl-modal-close {
                        font-size: 20px;
                        position: absolute;
                        right: 15px;
                        top: 2px;
                        overflow: hidden;
                        cursor: pointer;
                        color: #424243;
                        .iconfont {
                            font-size: 20px;
                        }
                    }
                    .vbl-modal-title {
                        display: inline-block;
                        width: auto;
                        height: auto;
                        margin-left: 20px;
                        line-height: 36px;
                        font-size: 14px;
                        font-weight: 700;
                        overflow: hidden;
                        font-weight: normal;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                .vbl-modal-body {
                    margin: 30px;
                }
                .vbl-modal-footer {
                    margin: 0 30px 30px 30px;
                    text-align: right;
                    .vbl-button {
                        margin-right: 8px;
                    }
                }
            }
        }
        &.is-alert,
        &.is-prompt {
            font-size: 14px;
        }
        &.is-img {
            .vbl-modal-content-wrap {
                &.vertical-center {
                    .vbl-modal-content {
                        margin: 0 60px;
                    }
                }
                .vbl-modal-close {
                    font-size: 20px;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    z-index: 999px;
                    overflow: hidden;
                    cursor: pointer;
                    color: #fff;
                }
                .vbl-modal-content {
                    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
                    margin: 20px 60px;
                    overflow: hidden;
                    border-radius: 0;
                    border: none;
                    .vbl-modal-body {
                        margin: 0;
                        img {
                            width: 100%;    
                            vertical-align: bottom;
                        }
                    }
                }
            }
        }  
    }  
</style>
