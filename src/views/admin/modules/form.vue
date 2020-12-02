<template>
    <a-form-model ref="ruleForm" :rules="rules" :model="form" :label-col="{span: 6}" :wrapper-col="{span: 16}">
        <a-form-model-item label="Account" prop="account">
             <a-input v-model="form.account" />
        </a-form-model-item>

        <a-form-model-item label="Avatar" prop="avatar">
             <a-upload
                name="avatar"
                list-type="picture-card"
                class="avatar-uploader"
                :show-upload-list="false"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :before-upload="beforeUpload"
                @change="handleChange"
            >
                <img v-if="form.avatar" :src="form.avatar" alt="avatar" />
                <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">
                    Upload
                </div>
                </div>
            </a-upload>
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

    </a-form-model>
</template>
<script>
import { validatePhone, validatePassword } from "@/utils/validate"
export default {
    name: "ModuleForm",
    data() {
        return {
            form: { },
            rules: {
                account: [
                    { required: true, message: 'Please input Activity Account', trigger: 'blur'}
                ],
                avatar: [
                    { required: true, message: 'Please upload avatar', trigger: 'blur'}
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
        handleChange(info) {
            if (info.file.status === 'uploading') {
                this.loading = true;
                return;
            }
            if (info.file.status === 'done') {
                // Get this url from response in real world.
                getBase64(info.file.originFileObj, imageUrl => {
                this.imageUrl = imageUrl;
                this.loading = false;
                });
            }
        },
        beforeUpload(file) {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                this.$message.error('You can only upload JPG file!');
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('Image must smaller than 2MB!');
            }
            return isJpgOrPng && isLt2M;
        },
    }
}
</script>