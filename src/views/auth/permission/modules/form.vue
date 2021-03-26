<template>
    <a-form-model ref="ruleForm" :rules="rules" :model="modelForm" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-form-model-item label="Id" prop="id" v-if="modelForm.id">
            <a-input v-model="modelForm.id" disabled />
        </a-form-model-item>

        <a-form-model-item label="父节点" prop="name">
            <a-tree-select
                v-model="modelForm.p_id"
                style="width: 100%"
                :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                :tree-data="permissions"
                :replaceFields="replaceFields"
                placeholder="Please select" />
        </a-form-model-item>

        <a-form-model-item label="权限名称" prop="name">
            <a-input v-model="modelForm.name" allow-clear />
        </a-form-model-item>

        <a-form-model-item label="Url" prop="url">
            <a-input v-model="modelForm.url" allow-clear />
        </a-form-model-item>

        <a-form-model-item label="请求方法" prop="method">
            <a-radio-group v-model="modelForm.method" button-style="solid">
                <a-radio-button :value="method" v-for="method in availableMethods" :key="method">{{ method }}</a-radio-button>
            </a-radio-group>
        </a-form-model-item>

        <a-form-model-item label="Icon" prop="icon">
            <a-input type="url" v-model="modelForm.icon" allow-clear />
        </a-form-model-item>

        <a-form-model-item label="是否禁用" prop="status">
            <a-switch v-model="modelForm.status" checked-children="是" un-checked-children="否" default-checked  allow-clear/>
        </a-form-model-item>
        
        <a-form-model-item label="是否隐藏" prop="hidden">
            <a-switch v-model="modelForm.hidden" checked-children="是" un-checked-children="否" default-checked  allow-clear/>
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ offset: 4 }">
            <a-button type="primary" @click="onSubmit" :loading="loading">确认</a-button>
            <a-button style="margin-left: 10px;" @click="$emit('close')">取消</a-button>
        </a-form-model-item>
    </a-form-model>
</template>
<script>
import UploadImage from '@/components/tools/UploadImage';
import { getPermisstionTree, update, add } from '@/api/permission';

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
            replaceFields: {
                children:'children', 
                title:'name', 
                key: 'id',
                value: 'id'
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                return valid
            });

            this.loading = true
            update(this.modelForm).then((res) => {
                this.$message.success('Success');
                this.loading = false
                this.$emit('success')
            }).catch(() => {
                this.$message.success('Server Error');
                this.loading = false
            })
        },

        /**
         * 获取权限树节
         */
        async getPermissionTree() {
            await getPermisstionTree().then(({ data }) => {
                this.permissions = data;
            });
        }

        
    },

    created() {
        this.modelForm = this.formData;
        this.getPermissionTree();
    }
};
</script>
