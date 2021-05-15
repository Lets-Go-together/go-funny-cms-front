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
                        <a-button type="primary" icon="add" @click="add()" :loading="tableLoading">添加</a-button>
                    </a-button-group>
                </a-form-item>
            </a-form>
        </div>
        <a-divider dashed />
        <div class="tableList">
            <a-table rowKey="id" :loading="tableLoading" :columns="columns" :data-source="data" :pagination="pagination" @change="handleTableChange">
                <span slot="status" slot-scope="status">
                    <a-tag color="#108ee9" v-if="status == 1">待发送</a-tag>
                    <a-tag color="#87d068" v-if="status == 2">发送中</a-tag>
                    <a-tag color="#87d068" v-if="status == 3">发送成功</a-tag>
                    <a-tag color="#f50" v-if="status == 4">发送失败</a-tag>
                </span>

                <span slot="emails" slot-scope="emails">
                    <a-tag v-for="email in emails" :key="email">{{ email }}</a-tag>
                </span>

                <span slot="action" slot-scope="record">
                    <!-- <a-button type="link" @click="edit(record)">{{ $t('edit') }}</a-button> -->
                    <a-dropdown>
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">更多<a-icon type="down"/></a>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a-popconfirm :title="$t('confirm_delete')" @confirm="del(record.id)" ok-text="Yes" cancel-text="No">
                                    <a href="#">{{ $t('delete') }}</a>
                                </a-popconfirm>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;" @click="showContent(record)">查看邮件</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </span>
            </a-table>
        </div>

        <a-drawer :title="formModue.title" width="80%" :visible="formModue.visible" :confirm-loading="formModue.loadding" @close="formModue.visible = false">
            <module-form v-if="formModue.visible" :formData.sync="formModue.formData" @success="success" @close="formModue.visible = false"></module-form>
        </a-drawer>

        <Content :title="title" :visible.sync="visible" :content="content" />
    </div>
</template>

<script>
import { getList, del } from '@/api/email';
import PageMixin from '@/mixins/PageMixin';
import ModuleForm from './form';
import Content from './html';
import mixin from './mixin';
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
                {
                    title: '发送状态',
                    scopedSlots: { customRender: 'status' },
                    dataIndex: 'status',
                    key: 'status'
                },
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
            tableLoading: false,
            formModue: {
                title: '添加',
                visible: false,
                formData: {},
                loadding: false
            }
        };
    },
    methods: {
        /**
         * table列表
         */
        getList(params = {}) {
            params = Object.assign(
                {
                    status: [1, 2, 3, 4]
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
        },

        /**
         * 编辑
         */
        edit(item) {
            item = JSON.parse(JSON.stringify(item));
            this.$set(this, 'formModue', {
                title: '编辑',
                visible: true,
                formData: item
            });
        },

        /**
         * 删除
         */
        del(id) {
            del(id).then(data => {
                this.$message.success(data.message);
                this.getList();
            });
        },

        /**
         * edit
         */
        success() {
            this.formModue.visible = false;
            this.getList();
        }
    },
    mounted() {
        this.getList();
    }
};
</script>
