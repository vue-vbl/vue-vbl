<template>
    <div class="vbl-autocomplete">
        <vbl-input v-bind="$attrs" 
            :value="value"  
            @input="onInput" 
            @blur="onBlur"></vbl-input>
        <transition name="fade">
            <ul class="list" v-show="show">
                <li v-for="item in computedSuggestions" 
                    @click="onClick(item[itemKey])">
                    {{item[itemKey]}}
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'vbl-autocomplete',
        inheritAttrs: false,
        props: {
            value: {
                type: String,
                default: ''
            },
            suggestions: {
                type: Array,
                default: () => []
            },
            itemKey: {
                type: String,
                default: 'name'
            },
            maxNum: {
                type: Number,
                default: 10
            }
        },
        data() {
            return {
                isActive: false
            };
        },
        computed: {
            computedSuggestions() {
                if (this.maxNum < this.suggestions.length) {
                    return this.suggestions.splice(0, this.maxNum);
                }
                return this.suggestions;
            },
            show() {
                return this.isActive && !!this.computedSuggestions.length;
            }
        },
        methods: {
            onClick(item) {
                this.$emit('input', item);
                this.isActive = false;
            },
            onInput(val) {
                this.$emit('input', val);
                this.isActive = true;
            },
            onBlur() {
                if (this.isActive) {
                    this.isActive = false;
                }
            }
        }
    };
</script>

<style lang="less">
    .vbl-autocomplete {
        position: relative;
        .list {
            margin: 8 0;
            width: 100%;
            position: absolute;
            z-index: 999;
            background: #fff;
            margin: 0;
            padding: 8px 0;
            min-width: 96px;
            border: 1px solid #eee;
            border-radius: 4px;
            box-shadow: 0 1px 6px rgba(0,0,0,.2);
        }
        .list li {
            height: 28px;
            line-height: 28px;
            padding: 0 8px;
            overflow: hidden;
            color: #000;
            &:hover {
                background: #ebf7ff;
            }
            &.is-selected {
                background: #ebf7ff;
            }
        }
    }
</style>
