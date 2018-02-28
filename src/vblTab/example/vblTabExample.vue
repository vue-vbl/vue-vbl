<template>
    <div>
        <vbl-tab-group :selected-index.sync="index">
            <vbl-tab label="标题1">内容1</vbl-tab>
            <vbl-tab label="标题2">内容2</vbl-tab>
            <vbl-tab label="标题3">内容3</vbl-tab>
        </vbl-tab-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0
        }
    }
};
</script>
