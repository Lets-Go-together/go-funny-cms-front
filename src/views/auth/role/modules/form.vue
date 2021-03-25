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
                placeholder="Please select" />
        </a-form-model-item>

        <a-form-model-item label="角色名称" prop="name">
            <a-input v-model="modelForm.name" allow-clear />
        </a-form-model-item>

        <a-form-model-item label="角色描述" prop="description">
            <a-input v-model="modelForm.url" allow-clear />
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
            permissions: []
        };
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                } else {
                    return false;
                }
            });

            update(this.modelForm).then(() => {
                console.log(arguments)
            })
        },

        /**
         * 获取权限树节
         */
        async getRole() {
            await getRole({id: this.formData.id}).then(({ data }) => {
                this.permissions = data;
            });

            this.permissions = this.permissions.map(permission => {
                permission.key = permission.id = permission.id;
                permission.value = permission.id = permission.id;
                permission.title = permission.name;
                return permission;
            });
        }
    },

    created() {
        this.modelForm = this.formData;
        this.getRole();
    }
};
</script>
