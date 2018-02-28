<template>
    <div>
       <p> <vbl-textarea placeholder="提示" v-model="val"></vbl-textarea></p>
       <br/>
       删除前后空格
       <p> <vbl-textarea placeholder="提示" v-model="val1" trim></vbl-textarea></p>
       <br/>
       禁用
       <p> <vbl-textarea placeholder="提示" v-model="val2" disabled></vbl-textarea></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                val: '',
                val1: '',
                val2: ''
            };
        }
    }
</script>