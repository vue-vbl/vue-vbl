<template>
    <div class="vbl-table">
        <table v-if="rows" 
            :style="{width: width ? `${width}px` : '100%'}">
            <thead>
                <tr>
                    <th v-if="hasMore">更多</th>
                    <th v-if="hasSelect">选择</th>
                    <th v-if="hasCheckbox">
                        <vbl-checkbox v-model="checkAll" @change="onCheckAll"></vbl-checkbox>
                    </th>
                    <th v-for="column in columns" 
                        :style="{width: column.width ? `${column.width}%` : 'auto'}">
                        <div v-if="order.indexOf(column.name) >= 0" 
                            class="table-sort-wrap" 
                            @click="orderBy(column.name)">
                            <span>{{column.text}}</span>
                            <div class="table-sort" 
                                :class="getSortActiveClass(column.name)">
                                <vbl-icon type="ion-android-arrow-dropup"></vbl-icon>
                                <vbl-icon type="ion-android-arrow-dropdown"></vbl-icon>                               
                            </div>
                        </div>
                        <span v-else>{{column.text}}</span>
                    </th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-if="rows.length === 0">
                    <td :colspan="colspan" style="text-align: center">没有数据!</td>
                </tr>
            </tbody>
            <tbody v-for="(row, index) in rows">
                <tr>
                    <td v-if="hasMore" class="more-btn">
                        <vbl-icon v-if="isMore[index]" 
                            type="ion-android-remove" 
                            @click="toggleMore(row, index)"></vbl-icon>
                        <vbl-icon v-else 
                            type="ion-android-add" 
                            @click="toggleMore(row, index)"></vbl-icon>
                    </td>
                    <td v-if="hasSelect">
                        <vbl-radio v-model="dataSelect" :native-value="row"></vbl-radio>
                    </td>
                    <td v-if="hasCheckbox">
                        <vbl-checkbox v-model="dataCheck" :native-value="row" @change="onCheck(row, index)"></vbl-checkbox>
                    </td>
                    <td v-for="column in columns">
                        <slot :name="column.name" 
                            :value="row"
                            :index="index">
                            {{row[column.name]}}
                        </slot>
                    </td>
                </tr>
                <tr v-if="hasMore">
                    <td v-show="isMore[index]" :colspan="colspan">
                        <slot name="more" :value="row" :index="index"></slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            width: {
                type: [String, Number]
            },
            columns: {
                required: true,
                type: Array
            },
            rows: {
                required: true,
                default: null
            },
            order: {
                type: Array,
                default: () => []
            },
            more: {
                type: Boolean,
                default: false
            },
            check: {
                type: Array,
                default: null
            },
            select: {
                default: null
            }
        },
        data() {
            return {
                dataCheck: this.check,
                dataSelect: this.select,
                checkAll: false,
                columnSort: '',
                toggleSort: 1,
                isMore: []
            };
        },
        computed: {
            hasMore() {
                return this.more;
            },
            hasCheckbox() {
                return this.check !== null;
            },
            hasSelect() {
                return this.select !== null;
            },
            colspan() {
                var length = this.columns.length;
                if (this.hasCheckbox) {
                    length += 1; 
                }
                if (this.hasSelect) {
                    length += 1;
                }
                if (this.hasMore) {
                    length += 1;
                }
                return length;
            }
        },
        watch: {
            rows() {
                this.dataCheck = [];
            },
            check(val) {
                this.dataCheck = val;
            },
            dataCheck(val) {
                this.$emit('update:check', val);
            },
            select(val) {
                this.dataSelect = val;
            },
            dataSelect(val) {
                this.$emit('update:select', val);
            }
        },
        methods: {
            onCheckAll(val) {
                this.dataCheck = [];
                if (val) {
                    this.rows.forEach((row, index) => {
                        this.dataCheck.push(row);
                    });
                }
            },
            onCheck(row, index) {
                var index = this.dataCheck.indexOf(row);
                if (index < 0) {
                    this.dataCheck.push(row);
                    if (this.dataCheck.length === this.rows.length) {
                        this.checkAll = true;
                    }
                } else {
                    this.dataCheck.splice(index, 1);
                    this.checkAll = false;
                }
            },
            orderBy(name) {
                this.toggleSort = -this.toggleSort;
                this.columnSort = name;
                this.rows.sort((a, b) => {
                    return String(a[name]).localeCompare(String(b[name])) * this.toggleSort;
                });
            },
            getSortActiveClass(name) {
                if (this.columnSort === name) {
                    if (this.toggleSort === 1) {
                        return 'active-up';
                    } else {
                        return 'active-down';
                    };
                } 
                return '';
            },
            toggleMore(row, index) {
                this.$set(this.isMore, index, !this.isMore[index]);
                this.$emit('toggle-more', this.isMore[index], row, index);
            },
            clearSelect() {
                this.dataSelect = null;
            }
        }
    };
</script>

<style lang="less">
    .vbl-table {
        overflow-x: auto;
        table {
            border: 1px solid #d7dde4;
            border-right: 0;
            border-bottom: 0;
            text-align: left;
            line-height: 18px;
            a {
                color: #1d86f4;
            }
            th, td {
                padding: 0 20px;
            }
            td {
                padding-top: 10px;
                padding-bottom: 10px;
                word-break: break-all;
            }
            .table-sort-wrap span {
                vertical-align: middle;
                margin-right: 4px;
            }
            .table-sort-wrap {
                cursor: pointer;
            }
            thead {
                display: table-header-group;
                vertical-align: middle;
                border-color: inherit;
                color: #000;
                tr {
                    display: table-row;
                    vertical-align: inherit;
                    border-color: inherit;
                    th {
                        min-width: 0;
                        height: 36px;
                        background: #f5f7f9;
                        box-sizing: border-box;
                        text-overflow: ellipsis;
                        vertical-align: middle;
                        border-bottom: 1px solid #e3e8ee;
                        border-right: 1px solid #e3e8ee;
                        white-space: nowrap;
                        .table-sort {
                            display: inline-block;
                            width: 9px;
                            height: 12px;
                            vertical-align: middle;
                            overflow: hidden;
                            cursor: pointer;
                            position: relative;
                            &.active-up .ion-android-arrow-dropup,
                            &.active-down .ion-android-arrow-dropdown {
                                color: #1d86f4;
                            }
                            .vbl-icon {
                                display: block;
                                height: 6px;
                                line-height: 6px;
                                overflow: hidden;
                                position: absolute;
                                color: #bbbec4;
                                font-size: 16px;
                                transition: color .2s ease-in-out;
                                &:before {
                                    line-height: 6px;
                                }
                                &:first-child {
                                    top: 0;
                                }
                                &:last-child {
                                    bottom: 0;
                                }  
                            }                     
                        }
                    }
                }
            }
            tbody {
                display: table-row-group;
                vertical-align: middle;
                border-color: inherit;
                tr {
                    display: table-row;
                    vertical-align: inherit;
                    border-color: inherit;
                    td {
                        min-width: 0;
                        height: 36px;
                        box-sizing: border-box;
                        text-align: left;
                        text-overflow: ellipsis;
                        vertical-align: middle;
                        border-bottom: 1px solid #e3e8ee;
                        border-right: 1px solid #e3e8ee;
                    }
                    .more-btn .vbl-icon {
                        cursor: pointer;
                        font-size: 16px;
                    }
                }
                tr.row-select,
                tr:hover {
                    background: #f2f8ff;
                }
            }
        }
    }
</style>
