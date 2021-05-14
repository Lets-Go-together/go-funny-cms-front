<template>
    <div>
        <div class="filters">
            <a-form :form="filters" layout="inline">
                <a-form-item label="">
                    <a-input placeholder="邮件名称" v-model="filters.keyword"></a-input>
                </a-form-item>
                <a-form-item label="">
                    <a-button-group>
                        <a-button type="primary" icon="search" @click="getList()" :loading="tableLoading">查询</a-button>
                        <!-- <a-button type="primary" icon="add" @click="add()" :loading="tableLoading">添加</a-button> -->
                    </a-button-group>
                </a-form-item>
            </a-form>
        </div>
        <a-divider dashed />
        <div class="tableList">
            <a-table rowKey="id" :loading="tableLoading" :columns="columns" :data-source="data" :pagination="pagination" @change="handleTableChange">
                <span slot="action" slot-scope="record">
                    <a href="javascript:;" @click="showContent(record)">查看邮件</a>
                </span>
            </a-table>
        </div>

        <Content :title="title" :visible.sync="visible" :content="content" />
    </div>
</template>

<script>
import { getList } from '@/api/email';
import PageMixin from '@/mixins/PageMixin';
import ModuleForm from './form';
import mixin from './mixin';
import Content from './html';

export default {
    mixins: [PageMixin, mixin],
    components: { ModuleForm, Content },
    data() {
        return {
            filters: {
                keyword: ''
            },
            columns: [
                {
                    title: 'Id',
                    dataIndex: 'id',
                    key: 'id'
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email'
                },
                {
                    title: '主题',
                    dataIndex: 'subject',
                    key: 'subject'
                },
                // {
                //     title: '发送状态',
                //     scopedSlots: { customRender: 'status' },
                //     dataIndex: 'status',
                //     key: 'status'
                // },
                {
                    title: '发送时间',
                    dataIndex: 'send_at',
                    key: 'send_at'
                },
                {
                    title: '操作',
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
                    fixed: 'right'
                }
            ],
            data: [],
            tableLoading: false
        };
    },
    methods: {
        /**
         * table列表
         */
        getList(params = {}) {
            params = Object.assign(
                {
                    status: [5]
                },
                params,
                this.pageParams,
                this.filters
            );

            this.tableLoading = true;
            getList(params)
                .then(({ data }) => {
                    this.data = data.list;
                    this.tableLoading = false;
                    this.pagination.total = data.total;
                })
                .catch(() => {
                    this.tableLoading = false;
                });
        }
    },
    mounted() {
        this.getList();
    }
};
</script>
