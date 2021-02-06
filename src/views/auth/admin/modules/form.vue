<template>
    <a-form-model ref="ruleForm" :rules="rules" :model="modelForm" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-form-model-item label="Account" prop="account">
            <a-input v-model="modelForm.account" />
        </a-form-model-item>

        <a-form-model-item label="Avatar" prop="avatar">
            <upload-image :imgUrl.sync="modelForm.avatar"></upload-image>
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
            <a-button style="margin-left: 10px;">取消</a-button>
        </a-form-model-item>
    </a-form-model>
</template>
<script>
import { validatePhone, validatePassword, validateConfirmPassword } from '@/utils/validate';
import UploadImage from '@/components/tools/UploadImage';

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
                // description: [{ required: true, message: '请输入管理员的描述', trigger: 'blur' }]
            },
            loading: false,
        };
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.loading = true
                    this.$emit('addSubmit', this.modelForm)
                    console.log(22)

                } else {
                    return false;
                }
            });
        }
    },
    created() {
        this.modelForm = this.formData;
    }
};
</script>
