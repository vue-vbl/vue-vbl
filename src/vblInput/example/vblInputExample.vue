<template>
    <div>
        <p><vbl-input placeholder="提示" v-model="val"></vbl-input></p> 
        <br/>
        禁用     
        <p><vbl-input placeholder="提示" v-model="val2" disabled></vbl-input></p>
        <br/>
        带关闭   
        <p><vbl-input placeholder="提示" v-model="val2" clear></vbl-input></p>
        <br/>
        带icon   
        <p><vbl-input placeholder="提示" v-model="val2" icon="ion-ios-arrow-forward"></vbl-input></p>
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
