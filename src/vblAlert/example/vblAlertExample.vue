<template>
    <div>
        <vbl-button @click="showInfo">显示提示框</vbl-button>
        <br/><br/>
        <vbl-button @click="showError">显示错误提示框</vbl-button>
        <br/><br/>
        <vbl-button @click="showSuccess">显示成功提示框</vbl-button>
        
    </div>
</template>

<script>
    export default {
        methods: {
            showInfo() {
                this.$alert.info('提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容');
            },
            showError() {
                this.$alert.error('错误提示框内容');
            },
            showSuccess() {
                this.$alert.success('成功提示框内容');
            },
        }
    }
</script>