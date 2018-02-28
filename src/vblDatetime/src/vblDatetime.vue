<template>
    <vbl-input ref="flatpickrInput" 
        v-model="dataValue"
        readonly
        clear
        @clear="clear"></vbl-input>
</template>

<script>
    import Flatpickr from 'flatpickr';
    import {zh} from 'flatpickr/dist/l10n/zh';
    
    zh.weekdays.shorthand = ['日', '一', '二', '三', '四', '五', '六'];
    
    export default {
        name: 'vbl-datetime',
        props: {
            value: {
                type: String,
                default: ''
            },
            time: {
                type: Boolean,
                default: false
            },
            disableFrom: {
                type: String,
                default: ''
            },
            disableTo: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                dataValue: this.value
            };
        },
        computed: {
            computedDisableTo() {
                return new Date(this.disableTo) - 24 * 60 * 60 * 1000;
            },
            options() {
                var opt = {};
                if (this.time) {
                    opt = {
                        time_24hr: true,// 24小时制
                        enableTime: true,// 显示小时分钟
                        dateFormat: "Y-m-d H:i:S",// 自定义格式
                        enableSeconds: true// 显示秒
                    };
                }
                
                if (this.disableTo && !this.disableFrom) {
                    opt.disable = [(date) => date < new Date(this.computedDisableTo)];
                } else if (!this.disableTo && this.disableFrom) {
                    opt.disable = [(date) => date > new Date(this.disableFrom)];
                } else if (this.disableTo && this.disableFrom) {
                    opt.disable = [(date) => {
                        return date < new Date(this.computedDisableTo) ||
                            date > new Date(this.disableFrom);
                    }];
                }
                
                opt.locale = zh;
                
                opt.onChange = (selectedDates, dateStr, instance) => {
                    this.$emit('change', dateStr);
                };
                
                return opt;
            }
        },
        watch: {
            value(val) {
                if (this.dataValue !== val) {
                    this.dataValue = val;
                    this.init();
                }
            },
            dataValue(val) {
                this.$emit('input', val);
            },
            options() {
                this.init();
            }
        },
        methods: {
            init() {
                this.flatpickr = new Flatpickr(
                    this.$refs.flatpickrInput.$el.querySelector('input'), 
                    this.options
                );
                this.flatpickr.setDate(this.dataValue);
                if (this.time) {
                    this.flatpickr.calendarContainer.classList.add(this.time);
                }
            },
            clear() {
                this.dataValue = '';
                this.flatpickr.setDate(new Date());
            }
        },
        mounted() {
            this.init();
        },
        beforeDestroy() {
            this.flatpickr.destroy();
        }
    };
</script>

<style lang="less">
    @import '~flatpickr/dist/flatpickr.min.css';
    
    .flatpickr-calendar {
        width: 268px !important;
        &.hour {
            .numInputWrapper:nth-of-type(2),
            .numInputWrapper:nth-of-type(3) {
                pointer-events: none;
            }
        }
        &.minute {
            .numInputWrapper:nth-of-type(3) {
                pointer-events: none;
            }
        }
        .flatpickr-day.today:hover {
            background: #e6e6e6;
            color: inherit;
        }
        .flatpickr-day.today {
            border-color: #badcff!important;
        }
        .flatpickr-day.selected {
            background: #1d86f4!important;
            border-color: #1d86f4!important;
        }
        .flatpickr-prev-month:hover svg, 
        .flatpickr-next-month:hover svg {
            fill: #1d86f4;
        }
        .flatpickr-month {
            height: 32px;
            border-bottom: 1px solid #e1e1e1;
            .flatpickr-current-month {
                span.cur-month {
                    font-size: 14px;
                }
                div.numInputWrapper {
                    font-size: 14px;
                }
            }
        }
        .flatpickr-innerContainer {
            width: auto;
            .flatpickr-rContainer {
                width: 268px;
                .flatpickr-weekdays {
                    height: 32px;
                    border-bottom: 1px solid #e1e1e1;
                    padding: 0 8px;
                    box-sizing: border-box;
                }
                .flatpickr-days {
                    width: auto;
                    div.dayContainer {
                        min-width: 268px;
                        padding: 0 8px;
                        .flatpickr-day {
                            max-width: 32px;
                            height: 32px;
                            line-height: 32px - 1;
                            margin: 2px 0;
                            .dayContainer {
                                width: 268px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
