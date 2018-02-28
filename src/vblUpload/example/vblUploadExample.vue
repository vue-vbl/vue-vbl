<template>
    <div>
        <div class="form-row">
            <label>文件：</label>
            <vbl-upload v-model="files">上传文件</vbl-upload>
        </div>
        <div class="form-row">
            <label>文件(可以上传多个)：</label>
            <vbl-upload v-model="files" multiple>上传文件</vbl-upload>
        </div>
        <div>
            注：现在只是上传文件的交互，上传图片的交互还没有添加！
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            files: []
        }
    }
};
</script>

<style scoped>
    label {
        float: left;
        line-height: 28px;
    }
    .form-row {
        margin-bottom: 14px;
    }
</style>
