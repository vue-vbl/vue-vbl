<template>
    <div>
        <div>
            <vbl-tree :checked.sync="checked" :list="data" type="checkbox"></vbl-tree>
        </div>
        <br/>
        <div>
            <vbl-tree :checked.sync="checked" :list="data" type="radio"></vbl-tree>
        </div>
        <br/>
        <div>
            <vbl-tree :checked.sync="checked" :list="data"></vbl-tree>
        </div>
        <br/><br/>
        <vbl-button @click="onClick">选中nnn</vbl-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked: {
                    name: [],
                    value: []
                },
                data: [{"id":"402814825a68b968015a68bcce110412","pId":"402814825a68b968015a68bccc2c040f","name":"前端应用组1","sort":1,"domainAccount":null},{"id":"402811e95b8976c6015b8a38489e0260","pId":"402814825a68b968015a68bcce110412","name":"测试部门666","sort":2,"domainAccount":null},{"id":"402811e95b8976c6015b8a9a49130384","pId":"402811e95b8976c6015b8a38489e0260","name":"nnn","sort":1,"domainAccount":null},{"id":"402811e95baf5530015bb258a54501db","pId":"402811e95b8976c6015b8a38489e0260","name":"我我我我我我我我我我我我我我我","sort":2,"domainAccount":null},{"id":"402811e95c14384f015c1522b24e00d0","pId":"402811e95b8976c6015b8a9a49130384","name":"ll","sort":1,"domainAccount":null},{"id":"402811e95bb2c0bf015bb339e0d90070","pId":"402811e95baf5530015bb258a54501db","name":"我我我我我我我我我我我我我我我我我我我","sort":1,"domainAccount":null}]
            }
        },
        methods: {
            onClick() {
                this.checked = {
                    name: ['nnn'],
                    value: ['402811e95b8976c6015b8a9a49130384']
                }
            }
        }
    }
</script>
