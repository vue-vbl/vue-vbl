export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        trim: {
            type: Boolean,
            default: false  
        },
        placeholder: {
            type: String,
            default: ''
        },
        readonly: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number]
        }
    },
    data() {
        return {
            dataValue: this.value
        };
    },
    watch: {
        value(val) {
            this.dataValue = val;
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);
        },
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
        onChange(e) {
            if (this.trim) {
                this.$emit('input', e.target.value.trim());
            }
            this.$emit('change', e);
        }
    }
};
