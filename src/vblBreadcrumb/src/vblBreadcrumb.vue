<template>
    <div class="vbl-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'vbl-breadcrumb',
        provide() {
            return {
                separator: this.separator
            };
        },
        props: {
            separator: {
                type: String,
                default: '>'
            }
        }
    };
</script>

<style>
    .vbl-breadcrumb {
        margin: 0 20px 20px;
    }
</style>