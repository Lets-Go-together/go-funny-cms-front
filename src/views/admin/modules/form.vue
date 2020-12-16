<template>
    <a-form-model ref="ruleForm" :rules="rules" :model="form" :label-col="{span: 6}" :wrapper-col="{span: 16}">
        <a-form-model-item label="Account" prop="account">
             <a-input v-model="form.account" />
        </a-form-model-item>

        <a-form-model-item label="Avatar" prop="avatar">
             <upload-image></upload-image>
        </a-form-model-item>

        <a-form-model-item label="Email" prop="email">
             <a-input v-model="form.email" />
        </a-form-model-item>

        <a-form-model-item label="Phone" prop="phone">
             <a-input v-model="form.phone" />
        </a-form-model-item>

        <a-form-model-item label="Password" prop="password">
             <a-input v-model="form.password" />
        </a-form-model-item>

        <a-form-model-item label="Confirm Password" prop="confirm_password">
             <a-input v-model="form.confirm_password" />
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ span: 16, offset: 6 }">
            <a-button type="primary" @click="onSubmit">
                确认
            </a-button>
            <a-button style="margin-left: 10px;">
                取消
            </a-button>
            </a-form-model-item>
    </a-form-model>
</template>
<script>
import { validatePhone, validatePassword } from "@/utils/validate"
import UploadImage from '@/components/tools/UploadImage'

export default {
    name: "ModuleForm",
    components: {
        UploadImage
    },
    props: ['formData'],
    data() {
        return {
            form: { },
            rules: {
                account: [
                    { required: true, message: '请输入账号', trigger: 'blur'}
                ],
                avatar: [
                    { required: false, message: 'Please upload avatar', trigger: 'blur'}
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur'},
                    { type: 'email',  message: '请输入正确的邮箱' },
                ],
                phone: [
                    { required: true, message: '请输入电话号码', trigger: 'blur'},
                    { validator: validatePhone, trigger: 'blur'},
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur'},
                ],
                confirm_password: [
                    { validator: validatePassword, trigger: 'blur'},
                    { validator: this.validateConfirmPassword, trigger: 'blur'},
                ]
            },
            loading: false
        }
    },
    methods: {
        validateConfirmPassword(rule, value, callback){
            let pass = this.form.password
            if(pass !== value) {
                return callback(new Error('两次输入密码不一致'));
                
            }
            
            return callback()
        },
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.$emit("addSubmit", this.form)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>