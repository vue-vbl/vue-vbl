<template>
    <div class="vbl-upload">
        <ul v-if="dataValue.length">
            <li v-for="file in dataValue" :key="file.name">
                {{file.name}}
            </li>
        </ul>
        <a href="javascript:;" class="a-upload">
            <input type="file" 
                :accept="accept"
                :multiple="multiple"
                @change="change"/>
            <vbl-button icon="ion-ios-cloud-upload-outline" 
                theme="light-secondary">
                <slot></slot>
            </vbl-button>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'vbl-upload',
        props: {
            value: {
                default: () => []  
            },
            accept: {
                type: String
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                dataValue: this.value
            };
        },
        methods: {
            change(e) {
                this.dataValue = e.target.files;
                this.$emit('input', this.dataValue);
                this.$emit('change', this.dataValue);
            }
        }
    };
</script>

<style lang="less">
    .vbl-upload {
        display: inline-block;
        .a-upload {
            overflow: hidden;
            position: relative;
            cursor: pointer;
            color: #888;
            display: inline-block;
            *display: inline;
            *zoom: 1;
            .vbl-button {
                background: transparent;
            }
            &:hover {
                background: #f2f8ff;
            }
        }
        .a-upload input {
            position: absolute;
            font-size: 100px;
            right: 0;
            top: 0;
            opacity: 0;
            filter: alpha(opacity=0);
            cursor: pointer;
        }
        ul {
            li {
                line-height: 28px;
            }
        }
    }
</style>
