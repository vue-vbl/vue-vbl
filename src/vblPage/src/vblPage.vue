<template>
    <div class="vbl-page">
        <p class="total-num" v-if="hasTotal">共 <span>{{total}}</span> 条</p>
        <vbl-icon type="ion-ios-arrow-left" class="page-prev" :class="{'is-disabled': !hasPrev}" @click="onPrev"></vbl-icon>
        <ul class="page-list">
            <li>
                <a class="page-link"
                    :class="{'is-current': 1 === dataCurrent}"
                    @click="onFirst">1</a>
            </li>
            <li v-if="hasFirstEllipsis">
                <a class="page-ellipsis" @click="onPrevMore">
                    <vbl-icon type="ion-ios-arrow-left"></vbl-icon>
                    <vbl-icon type="ion-ios-arrow-left"></vbl-icon>
                </a>
            </li>
            <li v-for="page in pagesInRange">
                <a class="page-link" 
                    :class="{'is-current': page === dataCurrent}"
                    @click="onPage(page)">
                    {{page}}
                </a>
            </li>
            <li v-if="hasLastEllipsis">
                <a class="page-ellipsis" @click="onNextMore">
                    <vbl-icon type="ion-ios-arrow-right"></vbl-icon>
                    <vbl-icon type="ion-ios-arrow-right"></vbl-icon>
                </a>
            </li>
            <li v-if="hasLast">
                <a class="page-link"
                    :class="{'is-current': pageCount === dataCurrent}"
                    @click="onLast">{{pageCount}}</a>
            </li>
        </ul>    
        <vbl-icon type="ion-ios-arrow-right" class="page-next" :class="{'is-disabled': !hasNext}" @click="onNext"></vbl-icon>
        <p v-if="hasPerPage" class="per-page">
            <vbl-select v-model="dataPerPage">
                <vbl-option v-for="option in perPages" :value="option" :key="option">{{option}}条/页</vbl-option>
            </vbl-select>
        </p>
        <p v-if="hasGoPage" class="go-page">
            跳至 <vbl-input v-model="goPage" @blur="onInput"></vbl-input> 页
        </p>
    </div>
</template>

<script>
    export default {
        name: 'vbl-page',
        props: {
            total: {
                type: Number,
                required: true
            },
            hasTotal: {
                type: Boolean,
                default: true
            },
            hasPerPage: {
                type: Boolean,
                default: true
            },
            hasGoPage: {
                type: Boolean,
                default: true
            },
            current: {
                type: Number,
                default: 1
            },
            perPage: {
                type: Number,
                default: 10
            }
        },
        data() {
            return {
                dataCurrent: this.current,
                dataPerPage: this.perPage,
                goPage: '',
                perPages: [10, 20, 30, 40, 50]
            };
        },
        computed: {
            pageCount() {
                return Math.ceil(this.total / this.dataPerPage);
            },
            hasPrev() {
                return this.dataCurrent > 1;
            },
            hasFirstEllipsis() {
                return this.dataCurrent - 3 > 1;
            },
            hasLastEllipsis() {
                return this.dataCurrent + 3 < this.pageCount;
            },
            hasNext() {
                return this.dataCurrent < this.pageCount;
            },
            hasLast() {
                return this.pageCount > 1;
            },
            pagesInRange() {
                var left = Math.max(2, this.dataCurrent - 2);
                var right = Math.min(this.dataCurrent + 2, this.pageCount - 1);
                var pages = [];
                for (var i = left; i <= right; i++) {
                    pages.push(i);
                }
                return pages;
            }
        },
        watch: {
            perPage(val) {
                this.dataPerPage = val;
            },
            dataPerPage(val) {
                this.dataCurrent = 1;
                this.$emit('update:per-page', val);
                this.$emit('change-per-page', val);
            },
            current(val) {
                this.dataCurrent = val;
            },
            dataCurrent(val) {
                this.$emit('change', val);
            }
        },
        methods: {
            changePage(page) {
                if (this.dataCurrent !== page) {
                    this.dataCurrent = page;
                }
            },
            onPage(page) {
                this.changePage(page);
            },
            onFirst() {
                this.changePage(1);
            },
            onLast() {
                this.changePage(this.pageCount);
            },
            onPrev() {
                if (this.dataCurrent - 1 >= 1) {
                    this.changePage(this.dataCurrent - 1);
                }
            },
            onNext() {
                if (this.dataCurrent + 1 <= this.pageCount) {
                    this.changePage(this.dataCurrent + 1);
                }
            },
            onPrevMore() {
                if (this.dataCurrent - 5 >= 1) {
                    this.changePage(this.dataCurrent - 5);
                } else {
                    this.onFirst();
                }
            },
            onNextMore() {
                if (this.dataCurrent + 5 <= this.pageCount) {
                    this.changePage(this.dataCurrent + 5);
                } else {
                    this.onLast();
                }
            },
            onInput() {
                var val = this.goPage;
                var page = Number(val);
                if (!page) {
                    page = 1;
                }
                if (page > this.pageCount) {
                    page = this.pageCount;
                }
                this.goPage = '';
                this.changePage(page);
            }
        }
    };
</script>

<style lang="less">
    .vbl-page {
        p {
            display: inline-block;
            margin-right: 7px;
            vertical-align: -2px;
        }
        .per-page {
            margin-right: 10px;
        }
        .page-prev,
        .page-next {
            display: inline-block;
            vertical-align: middle;
            min-width: 28px;
            height: 28px;
            line-height: 27px;
            list-style: none;
            text-align: center;
            cursor: pointer;
            color: #666;
            font-family: Arial;
            border: 1px solid #d7dde4;
            border-radius: 2px;
            transition: all .2s ease-in-out;
            .iconfont {
                font-size: 14px;
            }
        }
        .page-prev:hover {
            border: 1px solid #0e75e1;
        }
        .page-next.is-disabled:hover,
        .page-prev.is-disabled:hover {
            border: 1px solid #d7dde4;
        } 
        .page-next.is-disabled,
        .page-prev.is-disabled {
            .iconfont {
                color: #eee;
            }
        }
        .page-next {
            margin-right: 10px;
        }
        .page-next:hover {
            border: 1px solid #0e75e1;
        }
        .per-page {
            .vbl-select {
                width: 78px;
                position: relative;
                .vbl-btn-primary {
                    width: 55px;
                    font-size: 12px;
                    padding: 0 10px;
                }
                .menu {
                    position: absolute;
                    width: 65px;
                    top: 36px;
                    div>ul {
                        width: auto;
                        min-width: 75px;
                    }
                }
            }
        }
        .total-num {
            margin-right: 10px;
        }
        .go-page {
            .vbl-input {
                width: 32px;
                text-align: center;
            }
        }
        .page-list {
            display: inline-block;
            margin: 0 7px;
            vertical-align: 1px;
            li:last-child {
                margin-right: 0;
            }
            li {
                display: inline-block;
                vertical-align: middle;
                min-width: 26px;
                height: 26px;
                line-height: 26px;
                margin-right: 4px;
                text-align: center;
                list-style: none;
                cursor: pointer;
                font-family: Arial;
                transition: border .2s ease-in-out, color .2s ease-in-out;
                a {
                    width: 28px;
                    height: auto;
                    overflow: hidden;
                    display: inline-block;
                    border: 1px solid #d7dde4;
                    border-radius: 4px;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            }
            .is-current {
                width: 28px;
                height: auto;
                display: inline-block;
                background: #1d86f4;
                border: 1px solid #1d86f4;
                color: #fff;
            }
            li a:hover {
                border: 1px solid #0e75e1;
            }
            .page-ellipsis {
                position: relative;
                &:hover{
                    border: 1px solid #d7dde4;
                    &:after {
                        visibility: hidden;
                    }
                    .iconfont {
                        display: block;
                    }
                }
                &:after {
                    content: "\2022\2022\2022";
                    display: block;
                    letter-spacing: 1px;
                    color: #ccc;
                    text-align: center;
                }
                .iconfont {
                    display: none;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    font-size: 12px;
                    color: #0e75e1;
                }
                .vbl-icon:first-child {
                    left: -4px;
                }
                .vbl-icon:last-child {
                    left: 4px;
                }
            }
        }
    }
</style>
