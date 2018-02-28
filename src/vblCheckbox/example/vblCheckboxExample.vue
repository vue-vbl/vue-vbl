<template>
    <div>
        <div>
            <vbl-checkbox v-model="isCheck"> 是</vbl-checkbox>
        </div>
        <div>
            {{isCheck}}
        </div>
        <br/>
        
        <div>
            <vbl-checkbox v-model="isCheck1" :true-value="1" :false-value="0"> 是</vbl-checkbox>
        </div>
        <div>
            {{isCheck1}}
        </div>
        
        <br/>
        <vbl-checkbox v-model="val" :native-value="0">香蕉</vbl-checkbox>
        <vbl-checkbox v-model="val" :native-value="1">苹果</vbl-checkbox>
        <vbl-checkbox v-model="val" disabled>禁用</vbl-checkbox>
        <p>{{val}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                val: [0, 1],
                isCheck: false,
                isCheck1: 1
            };
        }
    }
</script>