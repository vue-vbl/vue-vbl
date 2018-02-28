<template>
    <form class="vbl-form" :data-vv-scope="formName" @submit.prevent="onSubmit">
        <slot></slot>
        <input type="hidden" 
            v-for="(item, name) in validate"
            :key="name"
            :name="name"
            :value="(item.key && value[name]) ? value[name][item.key] : value[name]"
            :data-vv-as="item.desc"
            data-vv-validate-on="none"
            v-validate="item.rules"/>
    </form>
</template>

<script>
    import {uniqueId} from 'vbl.utils';
    
    export default {
        name: 'vbl-form',
        provide() {
            return {
                formName: this.formName,
                formErrors: this.errors
            };
        },
        props: {
            validate: Object,
            value: Object
        },
        data() {
            return {
                formName: uniqueId('form')
            };
        },
        methods: {
           onSubmit() {
               this.$validator.validateAll(this.formName).then((result) => {
                   if (result) {
                       this.$emit('submit');
                   }
               });
           }
       }
    };
</script>