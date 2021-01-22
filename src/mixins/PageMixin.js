export default {
    data() {
        return {
            pagination: {
                pageSize: 10,
                page: 1,
                total: 0
            },
            pageParams: {
                pageSize: 10,
                page: 1
            }
        }
    },
    methods: {
        handleTableChange(pagination, filters, sorter) {
            console.log(pagination);
            const pager = { ...this.pagination };
            pager.current = pagination.current;
            this.pagination = pager;
            this.filters = Object.assign(this.filters, {
                pageSize: pagination.pageSize,
                page: pagination.current,
                sortField: sorter.field,
                sortOrder: sorter.order,
            })
            this.getList()
        }
    }
}