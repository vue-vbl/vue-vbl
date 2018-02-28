<template>
    <div>
        <vbl-radio v-model="val" native-value="0">香蕉</vbl-radio>
        <vbl-radio v-model="val" native-value="1">苹果</vbl-radio>
        <vbl-radio v-model="val" native-value="2" disabled>禁用</vbl-radio>
        
        <br/>
        <br/>
        {{val}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                val: '0'
            };
        }
    }
</script>