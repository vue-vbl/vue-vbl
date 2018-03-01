<template>
    <div class="vbl-icon-example">
        <vbl-icon type="ion-ionic" size="26"></vbl-icon>
        <br/>
        <hr/>
        <strong>所有图标：</strong>
        <all-icons></all-icons>
    </div>
</template>

<script>
    import allIcons from './allIcons';
    
    export default {
        components: {
            allIcons
        }
    }
</script>

<style lang="less">
    .vbl-icon-example {
        line-height: 1.5;
        strong {
            display: block;
            margin: 20px 0;
            font-weight: bold;
        }
    }
</style>
