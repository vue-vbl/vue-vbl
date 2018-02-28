<template>
    <div class="vbl-layout-example">
        <vbl-row>
            <vbl-col>auto</vbl-col><vbl-col>auto</vbl-col>
        </vbl-row>
        栅格间距20px
        <vbl-row gutters="20">
            <vbl-col cols="2">2</vbl-col>
            <vbl-col cols="2">2</vbl-col>
        </vbl-row>
        上下左右居中
        <vbl-row align="center" justify="center">
            <vbl-col cols="2">2</vbl-col>
            <vbl-col cols="8">8</vbl-col>
            <vbl-col cols="2">2</vbl-col>
        </vbl-row>
        栅格左侧的间隔格数
        <vbl-row>
            <vbl-col cols="2">2</vbl-col>
            <vbl-col cols="2" offset="8">2</vbl-col>
        </vbl-row>
        嵌套
        <vbl-row>
            <vbl-col>
                <vbl-row>
                    <vbl-col>auto</vbl-col>
                    <vbl-col>auto</vbl-col>
                </vbl-row>
            </vbl-col>
        </vbl-row>
    </div>
</template>

<script>
    export default {
    };
</script>

<style lang="less">
    .vbl-layout-example {
        .row {
            background: #f0f0f0;
            min-height: 200px;
        }
        .col,
        [class*="col-"] {
            text-align: center;
            background: #fff;
            border: 1px solid #1d86f4;
        }
    }
</style>
