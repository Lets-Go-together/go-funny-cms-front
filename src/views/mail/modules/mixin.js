export default {
    data() {
        return {
            visible: false,
            content: '',
            title: ''
        };
    },
    methods: {
        showContent(record) {
            this.title = record.subject;
            this.content = record.content;
            this.visible = true;
        },

        /**
         * 添加
         */
        add() {
            this.$set(this, 'formModue', {
                title: '添加',
                visible: true,
                formData: {}
            });
        }
    }
};
