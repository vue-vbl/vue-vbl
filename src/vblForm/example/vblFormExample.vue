<template>
    <div>
    <vbl-form :validate="validate" :value="value" @submit="onSubmit">
        <vbl-row>
            <vbl-col cols="3">
                <div class="label">邮箱</div>
            </vbl-col>
            <vbl-col cols="9">
                <vbl-form-item name="email">
                    <vbl-input type="text" v-model="value.email" />
                </vbl-form-item>
            </vbl-col>
        </vbl-row>
        <vbl-row>
            <vbl-col cols="3">
                <div class="label">联系地址</div>
            </vbl-col>
            <vbl-col cols="9">
                <vbl-form-item name="address">
                    <vbl-select v-model="value.address">
                        <vbl-option value="0">北京</vbl-option>
                        <vbl-option value="1">上海</vbl-option>
                        <vbl-option value="2" disabled>广州</vbl-option>
                    </vbl-select>
                </vbl-form-item>
            </vbl-col>
        </vbl-row>
        <vbl-row>
            <vbl-col cols="3">
                <div class="label">描述</div>
            </vbl-col>
            <vbl-col cols="9">
                <vbl-form-item name="info">
                    <vbl-textarea placeholder="介绍一下" v-model="value.info"></vbl-textarea>
                </vbl-form-item>
            </vbl-col>
        </vbl-row>
        <vbl-row>
            <vbl-col cols="3">
                <div class="label">喜欢吃的水果</div>
            </vbl-col>
            <vbl-col cols="9">
                <vbl-form-item name="fruit">
                    <vbl-checkbox :native-value="0" v-model="value.fruit">香蕉</vbl-checkbox>
                    <vbl-checkbox :native-value="1" v-model="value.fruit">苹果</vbl-checkbox>
                    <vbl-checkbox :native-value="2" disabled>梨</vbl-checkbox>
                </vbl-form-item>
            </vbl-col>
        </vbl-row>
        <vbl-row justify="center">
            <vbl-col>
                <div class="form-btns">
                    <vbl-button type="submit">提交</vbl-button>
                    <vbl-button theme="secondary">重置</vbl-button>
                </div>
            </vbl-col>
        </vbl-row>
    </vbl-form>
    <br/>
    <br/>
    <vbl-form :validate="validateS" :value="valueS" @submit="onSubmit">
        <vbl-row>
            <vbl-col cols="3">
                <div class="label">用户名</div>
            </vbl-col>
            <vbl-col cols="9">
                <vbl-form-item name="username">
                <vbl-input type="text" v-model="valueS.username" />
            </vbl-form-item>
            </vbl-col>
        </vbl-row>
        <vbl-row>
            <vbl-col cols="3">
                <div class="label">密码</div>
            </vbl-col>
            <vbl-col cols="9">
                <vbl-form-item name="password">
                <vbl-input type="password" v-model="valueS.password" />
            </vbl-form-item>
            </vbl-col>
        </vbl-row>
        <vbl-row justify="center">
            <vbl-col>
                <div class="form-btns">
                    <vbl-button type="submit">提交</vbl-button>
                    <vbl-button theme="secondary">重置</vbl-button>
                </div>
            </vbl-col>
        </vbl-row>
    </vbl-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                valueS: {
                    username: '',
                    password: ''
                },
                validateS: {
                    username: {
                        desc: '用户名',
                        rules: 'required'
                    },
                    password: {
                        desc: '密码',
                        rules: 'required'
                    }
                },
                value: {
                    email: '',
                    address: '',
                    info: '',
                    fruit: []
                },
                validate: {
                    email: {
                        desc: '邮件',
                        rules: 'required|isMail'
                    },
                    address: {
                        desc: '地址',
                        rules: 'required'
                    },
                    info: {
                        desc: '描述',
                        rules: 'required'
                    },
                    fruit: {
                        desc: '水果',
                        rules: 'required'
                    }
                }
            };
        },
        methods: {
            onSubmit() {
                alert('我要提交啦！！！！！');
            }
        }
    }
</script>

<style scoped>
    .label {
        text-align: right;
        margin-right: 8px;
    }
    .label:before {
        content: "*";
        display: inline-block;
        margin-right: 2px;
        line-height: 1;
        color: #e9474d;
        font-family: "Microsoft YaHei";
        vertical-align: middle;
    }
    .vbl-row {
        margin-bottom: 14px;
    }
    .label,
    .vbl-form-item {
        line-height: 28px;
    }
    .form-btns .vbl-button {
        margin: 0 4px;
    }
</style>