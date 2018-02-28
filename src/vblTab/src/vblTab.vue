<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'vbl-tab',
        props: {
            label: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                isActive: false
            };
        }
    };
</script>