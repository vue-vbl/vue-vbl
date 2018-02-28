export default {
    props: {
        value: {
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isChecked: false
        };
    },
    methods: {
        onChange(checked) {
            if (!this.disabled) {
                this.isChecked = checked;
                this.$parent.updateValue(this.value, this.isChecked);
            }
        }
    }
};
