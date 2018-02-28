<template>
    <div class="vbl-row container-fluid" :style="containerStyles">
        <div class="row"
            :class="classes"
            :style="styles">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vbl-row',
        provide() {
            return {
                gutters: this.gutters
            };
        },
        props: {
            align: {
                type: String,
                default: 'start'
            },
            justify: {
                type: String,
                default: 'start'
            },
            gutters: {
                type: [String, Number],
                default: 0
            }
        },
        computed: {
            containerStyles() {
                return {
                    'padding-left': `${this.gutters}px`,
                    'padding-right': `${this.gutters}px`
                };
            },
            styles() {
                return {
                    'margin-left': `-${this.gutters}px`,
                    'margin-right': `-${this.gutters}px`
                };
            },
            classes() {
                return [
                    `align-items-${this.align}`,
                    `justify-content-${this.justify}`
                ];
            }
        }
    };
</script>