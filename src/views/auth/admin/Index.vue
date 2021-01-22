<template>
    <page-header-wrapper>
        <a-card style="margin-top: 24px" :bordered="false">
            <div class="operate">
                <a-row class="filter" type="flex" justify="space-between" align="middle">
                    <a-col :span="12">列表</a-col>
                    <a-col :span="12">
                        <a-form layout="inline" class="form">
                            <a-form-item>
                                <a-input v-model="filter.account" placeholder="search admin account" enter-button />
                            </a-form-item>
                            <a-form-item>
                                <a-button type="primary" class="addAdmin" :loading="tableLoading" icon="search" @click="getList()">{{ $t('search') }}</a-button>
                            </a-form-item>
                        </a-form>
                    </a-col>
                </a-row>

                <a-button class="button" style="width: 100%" type="default" @click="add">{{ $t('add') }}</a-button>
            </div>

            <a-list item-layout="horizontal" :data-source="data">
                <a-list-item slot="renderItem" slot-scope="item">
                    <a-row type="flex" justify="space-between" align="middle">
                        <a-col :span="6">
                            <a-list-item-meta :description="`描述: ${item.description}`">
                                <a slot="title" href="javascript:;">{{ item.account }}</a>
                                <a-avatar shape="square" slot="avatar" :src="item.avatar" :size="64" />
                            </a-list-item-meta>
                        </a-col>
                        <a-col :span="6" style="text-align">
                            <div class="updated_at">
                                更新时间
                                <div>{{ item.updated_at }}</div>
                            </div>
                        </a-col>
                        <a-col :span="2">
                            <div class="operation">
                                <a-button type="link" @click="edit(item)">{{ $t('edit') }}</a-button>
                                <a-dropdown>
                                    <a class="ant-dropdown-link" @click="e => e.preventDefault()">更多<a-icon type="down"/></a>
                                    <a-menu slot="overlay">
                                        <a-menu-item>
                                            <a href="javascript:;" @click="del(item.id)">{{ $t('delete') }}</a>
                                        </a-menu-item>
                                    </a-menu>
                                </a-dropdown>
                            </div>
                        </a-col>
                    </a-row>
                </a-list-item>
            </a-list>
        </a-card>

        <a-modal :title="formModue.title" width="40%" :visible="formModue.visible" :confirm-loading="confirmLoading" @cancel="formModue.visible = false" :footer="null">
            <module-form v-if="formModue.visible" :formData.sync="formModue.formData" @addSubmit="addSubmit"></module-form>
        </a-modal>
    </page-header-wrapper>
</template>

<script>
import { getList, add, update, del } from '@/api/admin';
import ModuleForm from './modules/form';

const data = [];
export default {
    name: 'AdminList',
    components: {
        ModuleForm
    },
    data() {
        return {
            data: [],
            status: 'all',
            page: 1,
            pagination: {
                onChange: page => {
                    this.page = page;
                    this.getList();
                },
                showSizeChanger: true,
                showQuickJumper: true,
                pageSize: 20,
                total: 50
            },
            formModue: {
                title: '添加',
                visible: false,
                formData: {}
            },
            filter: {
                account: ''
            },
            confirmLoading: false,
            tableLoading: false
        };
    },
    created() {
        this.getList();
    },
    methods: {
        /**
         * table列表
         */
        getList() {
            let params = {
                page: this.page,
                pageSize: this.pageSize
            };
            params = Object.assign(params, this.filter);
            this.tableLoading = true;

            getList(params).then(({ data }) => {
                this.data = data.list;
                this.tableLoading = false;
            });
        },

        add() {
            this.formModue.visible = true;
            this.formModue.formData = {};
        },

        /**
         * 删除
         */
        del(id) {
            del(id).then(data => {
                this.$message.success(data.message);
            });
        },

        /**
         * 提交用户资料
         */
        addSubmit(modelForm) {
            let operate;
            if (modelForm.id) {
                operate = update(modelForm.id, modelForm);
            } else {
                operate = add(modelForm);
            }
            operate.then(data => {
                this.formModue.visible = false;
                this.$message.success(data.message);
                this.getList();
            });
        },

        edit(item) {
            item = JSON.parse(JSON.stringify(item));
            this.$set(this, 'formModue', {
                title: '编辑',
                visible: true,
                formData: item
            });
        },

        // 查看用户详情
        show() {
            this.formModue = {
                title: '编辑',
                visible: true
            };
        }
    }
};
</script>

<style lang="less" scoped>
.ant-avatar-lg {
    width: 48px;
    height: 48px;
    line-height: 48px;
}

.list-content-item {
    color: rgba(0, 0, 0, 0.45);
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 40px;

    span {
        line-height: 20px;
    }

    p {
        margin-top: 4px;
        margin-bottom: 0;
        line-height: 22px;
    }
}
.operate {
    margin-right: 20px;

    .filter {
        .form {
            float: right;
        }
    }
    .button {
        margin-top: 23px;
        margin-bottom: 23px;
    }
}

.ant-list-item > div {
    width: 100%;

    color: rgba(0, 0, 0, 0.45);
}
</style>
