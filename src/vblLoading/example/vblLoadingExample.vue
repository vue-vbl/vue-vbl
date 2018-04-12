<template>
    <div>
        <vbl-button @click="showLoading">加载数据</vbl-button>
    </div>
</template>

<script>
    export default {
        methods: {
            showLoading() {
                var loading = this.$loading.open();
                setTimeout(() => {
                    loading.destroy();
                }, 200000);
            }
        }
    }
</script>