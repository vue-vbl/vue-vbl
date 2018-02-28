<template>
    <div class="vbl-col" 
        :class="classes"
        :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'vbl-col',
        inject: ['gutters'],
        props: {
            cols: {
                type: [String, Number],
                default: 'auto'
            },
            offset: {
                type: [String, Number],
                default: 0
            }
        },
        computed: {
            styles() {
                return {
                    'padding-left': `${this.gutters}px`,
                    'padding-right': `${this.gutters}px`
                };
            },
            classes() {
                return [
                    `col-${this.cols}`,
                    {
                        [`offset-${this.offset}`]:  this.offset
                    }
                ];
            }
        }
    };
</script>