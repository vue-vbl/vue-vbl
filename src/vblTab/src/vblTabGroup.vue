<template>
    <div class="vbl-tab-group">
        <ul class="tab-title">
            <li v-for="(tabItem, index) in tabs"
                :class="{'is-active': dataSelectedIndex === index}"
                @click="dataSelectedIndex = index">
                {{tabItem.label}}
            </li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vbl-tab-group',
        props: {
            selectedIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                tabs: [],
                dataSelectedIndex: this.selectedIndex
            };
        },
        watch: {
            dataSelectedIndex(val, oldVal) {
                this.setTab(oldVal, false);
                this.setTab(val, true);
                this.$emit('update:selectedIndex', val);
                this.$emit('change', val);
            }
        },
        methods: {
            setTab(index, show) {
                if (index < this.tabs.length) {
                    this.tabs[index].isActive = show;
                }
            }
        },
        mounted() {
            this.tabs = this.$children;
            this.setTab(this.dataSelectedIndex, true);
        }
    };
</script>

<style lang="less">
    .vbl-tab-group {
        .tab-title {
            margin-bottom: 20px;
            li {
                &:first-child {
                    border-left: none;
                    padding-left: 0;
                }
                &.is-active {
                    color: #1d86f4;
                }
                display: inline-block;
                padding: 0 20px;
                border-left: 1px solid #e1e1e1;
                box-sizing: border-box;
                cursor: pointer;
                font-size: 14px;
            }
        }
    }
</style>