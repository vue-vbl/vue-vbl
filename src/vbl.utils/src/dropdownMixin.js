export default {
    data() {
        return {
            show: false
        };
    },
    methods: {
        clickOutside(e) {
            if (!this.$el.contains(e.target)) {
                this.show = false;
            }
        }
    },
    created() {
        document.addEventListener('click', this.clickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.clickOutside);
    }
};
