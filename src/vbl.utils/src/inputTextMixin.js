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
    }
};
