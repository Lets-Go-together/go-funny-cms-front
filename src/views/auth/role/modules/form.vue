<template>
    <a-form-model ref="ruleForm" :rules="rules" :model="modelForm" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-form-model-item label="Id" prop="id" v-if="modelForm.id">
            <a-input v-model="modelForm.id" disabled />
        </a-form-model-item>

        <a-form-model-item label="当前权限" prop="permission_ids">
            <a-tree-select
                v-model="modelForm.permission_ids"
                style="width: 100%"
                :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                :tree-data="permissions"
                tree-checkable
                :replaceFields="replaceFields"
                placeholder="Please select" />
        </a-form-model-item>

        <a-form-model-item label="当前菜单" prop="permission_ids">
            <a-tree-select
                v-model="modelForm.menu_ids"
                style="width: 100%"
                :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                :tree-data="menus"
                tree-checkable
                :replaceFields="replaceFields"
                placeholder="Please select" />
        </a-form-model-item>

        <a-form-model-item label="角色名称" prop="name">
            <a-input v-model="modelForm.name" allow-clear />
        </a-form-model-item>

        <a-form-model-item label="角色描述" prop="description">
            <a-textarea v-model="modelForm.description" allow-clear />
        </a-form-model-item>

        <a-form-model-item label="是否禁用" prop="status">
            <a-switch v-model="modelForm.status" checked-children="是" un-checked-children="否" default-checked  allow-clear/>
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ offset: 4 }">
            <a-button type="primary" @click="onSubmit" :loading="loading">确认</a-button>
            <!-- <a-button style="margin-left: 10px;">取消</a-button> -->
        </a-form-model-item>
    </a-form-model>
</template>
<script>
import UploadImage from '@/components/tools/UploadImage';
import { getRole, update } from '@/api/role';
import { getPermisstionTree } from '@/api/permission';
import { getMenuTree } from '@/api/menu';

export default {
    name: 'ModuleForm',
    components: {
        UploadImage
    },
    props: {
        formData: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            modelForm: {},
            rules: {},
            loading: false,
            availableMethods: ['GET', 'POST', 'PUT', 'DELETE', 'ANY'],
            permissions: [],
            menus: [],
            replaceFields: {
                children:'children', 
                title:'name', 
                key: 'id',
                value: 'id'
            },
            rules: {
                name: [{ required: true, message: "请输入角色名称", tigger: 'blur' }],
                description: [
                    { required: true, message: "请输入角色描述", tigger: 'blur' },
                    { type: "string", message: "角色描述最长不超过10个字符", min: 1, max: 10, tigger: 'blur' },
                ],
                // status: [{ type: "boolean", required: true, tigger: 'blur' }],
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    let params = JSON.parse(JSON.stringify(this.modelForm))
                    Object.assign(params, {status: params.status ? 2 : 1})
                    update(params).then(() => {
                        this.$message.success('Success');
                        this.loading = false
                        this.$emit('success')
                    }).catch(() => {
                        this.loading = false
                    })
                } else {
                    return false;
                }
            });
        },

        /**
         * 获取权限树节
         */
        async getRole(id) {
            await getRole({id: id}).then(({ data }) => {
                const { permission_ids, id, name, description, status, menu_ids } = data
                const form = {id: id, name: name, menu_ids: menu_ids, description: description, permission_ids: permission_ids ? permission_ids : [], status: status == 2 ? true : false}
                this.$set(this, 'modelForm', form)
            });
        },

        /**
         * 获取权限树节
         */
        async getPermissionTree() {
            await getPermisstionTree().then(({ data }) => {
                this.permissions = data.filter((item) => {
                    return item.id != 1
                });
            });
        },

        /**
         * 获取权限树节
         */
        async getMenuTree() {
            await getMenuTree().then(({ data }) => {
                this.menus = data
            });
        },
    },

    async mounted() {
        // this.modelForm = this.formData;

        await this.getPermissionTree()
        await this.getMenuTree()
        this.formData.id && this.getRole(this.formData.id);
    }
};
</script>
