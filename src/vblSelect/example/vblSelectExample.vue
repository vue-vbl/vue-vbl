<template>
    <div>
        <p>
            单选
            <vbl-select v-model="val1">
                <vbl-option :value="true">北京</vbl-option>
                <vbl-option :value="false">上海</vbl-option>
            </vbl-select>
        </p>
        {{val1}}
        <br/>
        <br/>
        <p>
            单选
            <vbl-select v-model="val">
                <vbl-option value="0">北京</vbl-option>
                <vbl-option value="1">上海</vbl-option>
                <vbl-option value="2" disabled>禁用</vbl-option>
            </vbl-select>
        </p>
        {{val}}
        <br/>
        <br/>
        <p>
            多选
            <vbl-multi-select v-model="valArr">
                <vbl-multi-option value="0">北京北京</vbl-multi-option>
                <vbl-multi-option value="1">上海上海上海</vbl-multi-option>
                <vbl-multi-option value="2">广州上</vbl-multi-option>
                <vbl-multi-option value="3">重庆重庆重庆重庆</vbl-multi-option>
                <vbl-multi-option value="4">成</vbl-multi-option>
                <vbl-multi-option value="5" disabled>禁用</vbl-multi-option>
            </vbl-multi-select>
        </p>
        {{valArr}}
        <br/>
        <br/>
        <p>
            禁用
            <vbl-select v-model="val" disabled>
                <vbl-option value="0">北京</vbl-option>
                <vbl-option value="1">上海</vbl-option>
                <vbl-option value="2" disabled>禁用</vbl-option>
            </vbl-select>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                val1: false,
                val: '',
                valArr: []
            };
        }
    }
</script>
