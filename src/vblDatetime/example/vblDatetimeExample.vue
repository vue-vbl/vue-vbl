<template>
    <div>
        <vbl-datetime  v-model="defaultValue"></vbl-datetime>
        <br/><br/>
        <vbl-button @click="onClick">设置2017-04-05</vbl-button>
        <br/><br/>
        <p>显示时分秒</p>
        <vbl-datetime  v-model="defaultValue1" time></vbl-datetime>
        <br/><br/>
        <vbl-button @click="onClick1">设置2017-04-05 04:05:06</vbl-button>
        <br/><br/>
        <p>时间段</p>
        <vbl-row align="center" justify="center">
            <vbl-col cols="11">
                <vbl-datetime  v-model="defaultValue3" :disable-from="defaultValue4"></vbl-datetime>
            </vbl-col>
            <vbl-col cols="2" style="text-align: center;">-</vbl-col>
            <vbl-col cols="11">
                <vbl-datetime  v-model="defaultValue4" :disable-to="defaultValue3"></vbl-datetime>
            </vbl-col>
        </vbl-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                defaultValue: '',
                defaultValue1: '',
                defaultValue2: '',
                defaultValue3: '',
                defaultValue4: ''
            };  
        },
        computed: {
            now() {
                return new Date().toString();
            }
        },
        methods: {
            onClick() {
                this.defaultValue = '2017-04-05';
            },
            onClick1() {
                this.defaultValue1 = '2017-04-05 04:05:06';
            }     
        }
    }
</script>