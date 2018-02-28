<template>
    <div class="start">
        <div class="header">
            <h1>&lt;vbl/&gt;</h1>
            <p>vue backend library</p>
        </div>
        <div class="content">
            <div class="readme" v-html="doc"></div>
        </div>
        <div class="footer">
            <router-link to="/vblLayout">
                <vbl-button large>马上开始</vbl-button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'start',
        computed: {
            doc() {
                return require('../README.md');
            }
        }
    };
</script>

<style lang="less">
    .start {
        margin: 20px;
        .header {
            color: #1D86F4;
            text-align: center;
            padding: 100px 0;
            h1 {
                font-size: 100px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            p {
                font-size: 50px;
            }
        }
        .readme a {
            color: #1D86F4;
        }
        .footer {
            margin: 20px 0;
        }
    }
</style>