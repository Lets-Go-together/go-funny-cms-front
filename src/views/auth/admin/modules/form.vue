<template>
    <a-form-model ref="ruleForm" :rules="rules" :model="modelForm" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-form-model-item label="Account" prop="account">
            <a-input v-model="modelForm.account" />
        </a-form-model-item>

        <a-form-model-item label="Avatar" prop="avatar">
            <upload-image :imgUrl.sync="modelForm.avatar"></upload-image>
        </a-form-model-item>

         <a-form-model-item label="用户角色" prop="permission_ids">
            <a-tree-select
                v-model="modelForm.role_ids"
                style="width: 100%"
                :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                :tree-data="tree"
                tree-checkable
                :replaceFields="replaceFields"
                placeholder="Please select" />
        </a-form-model-item>

        <a-form-model-item label="Email" prop="email">
            <a-input v-model="modelForm.email" />
        </a-form-model-item>

        <a-form-model-item label="Phone" prop="phone">
            <a-input v-model="modelForm.phone" autocomplete="phone" />
        </a-form-model-item>

        <a-form-model-item label="Password" prop="password">
            <a-input type="text" v-model="modelForm.password" autocomplete="password" />
        </a-form-model-item>

        <a-form-model-item label="Confirm Password" prop="confirm_password">
            <a-input type="text" v-model="modelForm.confirm_password" />
        </a-form-model-item>

        <a-form-model-item label="Desccription" prop="description">
            <a-input type="textarea" v-model="modelForm.description" />
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ span: 16, offset: 6 }">
            <a-button type="primary" @click="onSubmit" :loading="loading">确认</a-button>
            <!-- <a-button style="margin-left: 10px;">取消</a-button> -->
        </a-form-model-item>
    </a-form-model>
</template>
<script>
import { validatePhone, validatePassword, validateConfirmPassword } from '@/utils/validate';
import UploadImage from '@/components/tools/UploadImage';
import { getRoleTree, add, update, del } from '@/api/admin';

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
        let validateConfirmPassword = (rule, value, callback) => {
            let pass = this.modelForm.password;
            if(!pass) {
                return callback();
            }
            if (pass.length == 0) {
                return callback();
            }
            if (pass !== value) {
                return callback(new Error('两次输入密码不一致'));
            }
            return callback();
        };

        return {
            modelForm: {},
            rules: {
                account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                avatar: [{ required: false, message: 'Please upload avatar', trigger: 'blur' }],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱' }
                ],
                phone: [
                    { required: true, message: '请输入电话号码', trigger: 'blur' },
                    { validator: validatePhone, trigger: 'blur' }
                ],
                password: [{ validator: validatePassword, trigger: 'blur' }],
                confirm_password: [
                    { validator: validatePassword, trigger: 'blur' },
                    { validator: validateConfirmPassword, trigger: 'blur' }
                ],
                description: [{ required: true, message: '请输入管理员的描述', trigger: 'blur' }]
            },
            loading: false,
            tree: [],
            replaceFields: {
                children:'children', 
                title:'name', 
                key: 'id',
                value: 'id'
            },
        };
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.loading = true
                    let operate;
                    if (this.modelForm.id) {
                        operate = update(this.modelForm.id, this.modelForm);
                    } else {
                        operate = add(this.modelForm);
                    }
                    operate.then(data => {
                        this.$message.success(data.message);
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
        async getRoleTree() {
            await getRoleTree().then(({ data }) => {
                this.tree = data 
            });
        },
    },
    async created() {
        await this.getRoleTree()

        this.modelForm = this.formData;
    }
};
</script>
