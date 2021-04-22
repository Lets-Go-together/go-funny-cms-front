<template>
    <page-header-wrapper>
        <a-card>
            <div class="filters">
                <a-form :form="filters" layout="inline">
                    <a-form-item label="">
                        <a-input placeholder="菜单名称" v-model="filters.keyword"></a-input>
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
                <a-table rowKey="id" :loading="tableLoading" :columns="columns" :data-source="data" :pagination="false" @change="handleTableChange">
                    <span slot="status" slot-scope="status">
                        <a-tag color="#87d068" v-if="status == 1">正常</a-tag>
                        <a-tag color="#f50" v-else>禁用</a-tag>
                    </span>
                    
                    <span slot="emails" slot-scope="emails">
                        <a-tag v-for="email in emails" :key="email">{{ email }}</a-tag>
                    </span>

                    <span slot="action" slot-scope="record">
                        <a-button type="link" @click="edit(record)">{{ $t('edit') }}</a-button>
                        <a-dropdown>
                            <a class="ant-dropdown-link" @click="e => e.preventDefault()">更多<a-icon type="down"/></a>
                            <a-menu slot="overlay">
                                <a-menu-item>
                                    <a-popconfirm :title="$t('confirm_delete')" @confirm="del(record.id)" ok-text="Yes" cancel-text="No">
                                        <a href="#">{{ $t('delete') }}</a>
                                    </a-popconfirm>
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </span>
                </a-table>
            </div>
        </a-card>

        <a-drawer :title="formModue.title" width="800px" :visible="formModue.visible" :confirm-loading="formModue.loadding" @close="formModue.visible = false">
            <module-form v-if="formModue.visible" :formData.sync="formModue.formData" @success="success" @close="formModue.visible = false"></module-form>
        </a-drawer>
    </page-header-wrapper>
</template>

<script>
import { getList, add, update, del } from '@/api/email';
import PageMixin from '@/mixins/PageMixin';
import ModuleForm from './modules/form';
export default {
    mixins: [PageMixin],
    components: { ModuleForm },
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
                    title: '标题',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: '已发送',
                    scopedSlots: { customRender: 'emails' },
                    dataIndex: 'icon',
                    key: 'icon'
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
                    title: '操作人',
                    dataIndex: 'submitter',
                    key: 'submitter'
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
            params = Object.assign(params, this.pageParams, this.filters);
            this.tableLoading = true;
            getList(params)
                .then(({ data }) => {
                    this.data = data;
                    this.tableLoading = false;
                    // this.pagination.total = 10;
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
         * 添加
         */
        add() {
            this.$set(this, 'formModue', {
                title: '添加',
                visible: true,
                formData: {}
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
<style></style>
