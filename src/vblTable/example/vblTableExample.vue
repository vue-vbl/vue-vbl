<template>
    <div>
        <vbl-table :columns="columns" :rows="rows">
        </vbl-table>
        <br/>
        <vbl-button @click="clear">清空</vbl-button>
        <br/>
        <br/>
        
        自定义单元格
        <vbl-table :columns="columns1" :rows="rows">
            <template slot="actions" slot-scope="props">
                <a @click="deleteRow(props.value)">删除</a>
            </template>
        </vbl-table>
        <br/>
        <br/>
        点击选中
        <vbl-table :columns="columns"
            :rows="rows" 
            :select.sync="select">
        </vbl-table>
        <br/>
        <p>选中项：{{select}}</p>
        <br/>
        <vbl-button @click="clearSelect">取消选中</vbl-button>
        
        <br/>
        <br/>
        多选
        <vbl-table :columns="columns"
            :rows="rows"
            :order="order"
            :check.sync="check">
        </vbl-table>
        <br/>
        <p>选中项：{{check}}</p>
        
        <br/>
        <br/>
        更多
        <vbl-table :columns="columns"
            :rows="rows"
            :order="order"
            more
            @check="onChangeCheckbox">
            <template slot="more" slot-scope="props">
                {{props.value.name1}}
            </template>
        </vbl-table>
        
        <br/>
        <br/>
        设置宽度
        <vbl-table :columns="columns1"
            :rows="rows"
            width="2000">
            <td slot="actions" slot-scope="props">
                
                 <vbl-popover place="bottom">
             操作
            <div slot="content">
                <div style="width: 200px"> <a @click="deleteRow(props.value)">删除</a></div>
                <div style="width: 200px"> <a @click="deleteRow(props.value)">删除</a></div>
                <div style="width: 200px"> <a @click="deleteRow(props.value)">删除</a></div>
                <div style="width: 200px"> <a @click="deleteRow(props.value)">删除</a></div>
                <div style="width: 200px"> <a @click="deleteRow(props.value)">删除</a></div>
                <div style="width: 200px"> <a @click="deleteRow(props.value)">删除</a></div>
            </div>
        </vbl-popover>
               
            </td>   
        </vbl-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                select: {},
                check: [],
                order: ['order1'],
                columns: [
                    {
                        name: 'name1',
                        text: '姓名'
                    }, 
                    {
                        name: 'phone1',
                        text: '电话'
                    }, 
                    {
                        name: 'order1',
                        text: '排名'
                    }
                ],
                columns1: [
                    {
                        name: 'name1',
                        text: '姓名'
                    }, 
                    {
                        name: 'phone1',
                        text: '电话'
                    }, 
                    {
                        name: 'order1',
                        text: '排名'
                    },
                    {
                        name: 'actions',
                        text: '操作'
                    }
                ],
                rows: [
                    {
                        name1: '小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明',
                        phone1: '13412341234',
                        order1: 1
                    }, {
                        name1: '小红',
                        phone1: '13443214321',
                        order1: 2
                    }
                ]
            };
        },
        methods: {
            clear() {
                this.rows = [];
            },
            clearSelect() {
                this.select = null;
            },
            deleteRow(row) {
                var index = this.rows.indexOf(row);
                this.rows.splice(index, 1);
            },
            onChangeCheckbox(checked) {
                this.check = checked;
            },
            onChangeSelect(row) {
                this.select = row;
            }
        }
    }
    
</script>