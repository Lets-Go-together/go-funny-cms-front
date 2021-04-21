<template>
    <div class="list-notify">
        <a-divider />
        <div class="list-notify-item" v-for="(item, key) in list" :key="key">
            <h3 class="list-notify-item-user">{{ item.title }} :</h3>
            <i class="list-notify-item-time">> {{ item.updated_at }}</i>
            <p class="list-notify-item-detail">{{ item.description }} <a href="http://">查看详情</a></p>
            <a-divider dashed />
        </div>
    </div>
</template>

<script>
import { getList } from '@/api/notify';
export default {
    data() {
        return {
            list: [],
            page: 1,
            pageSize: 20,
            tableLoading: false
        };
    },
    methods: {
        /**
         * table列表
         */
        getList() {
            const {page, pageSize} = this
            let params = Object.assign({page, pageSize}, this.filter);
            this.tableLoading = true;
            getList(params)
                .then(({ data }) => {
                    this.list = data.list;
                })
                .finally(() => {
                    this.tableLoading = false;
                });
        }
    },
    mounted() {
      this.getList()
    }
};
</script>

<style lang="less">
.list-notify-item .ant-card-body {
    padding: 10px;
}
.list-notify-item-time {
  display: block;
  margin-bottom: 10px;
}
</style>
