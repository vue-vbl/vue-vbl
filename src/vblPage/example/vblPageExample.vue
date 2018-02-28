<template>
    <div>
        <div>
            <vbl-page :total="700"></vbl-page>
        </div>
        <br/>
        <br/>
        设置当前页
        <div>
            <vbl-page :total="700" :current.sync="current"></vbl-page>
        </div>
        <br/>
        <br/>
        设置每页条数
        <div>
            <vbl-page :total="700" :per-page.sync="perPage"></vbl-page>
        </div>
        <br/>
        <br/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                current: 2,
                perPage: 20
            };
        }
    };
</script>