<template>
    <vbl-form-item name="email">
        <vbl-input type="text" v-model="value.email" />
    </vbl-form-item>
</template>

<script>
    export default {
        props: ['value']  
    };
</script>