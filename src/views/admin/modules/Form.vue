<template>
    <div>
        <a-form :form="form" @submit="handleSubmit" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-form-item label="Account">
                <a-input v-decorator="['account', { rules: [{ required: true, message: 'Please input your account!' }] }]"></a-input>
            </a-form-item>
            <a-form-item label="Avatar">
                <a-upload
                    name="avatar"
                    list-type="picture-card"
                    class="avatar-uploader"
                    :show-upload-list="false"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :before-upload="beforeUpload"
                    @change="handleChange"
                >
                    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                    <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'" />
                        <div class="ant-upload-text">
                            Upload
                        </div>
                    </div>
        </a-upload>
            </a-form-item>
            <a-form-item label="Description">
                <a-input v-decorator="['description', { rules: [{ required: true, message: 'Please input your description!' }] }]"></a-input>
            </a-form-item>
            <a-form-item label="Email">
                <a-input v-decorator="['email', { rules: [{ required: true, message: 'Please input your Email!' }] }]"></a-input>
            </a-form-item>
            <a-form-item label="Phone">
                <a-input v-decorator="['phone', { rules: [{ required: true, message: 'Please input your Phone!' }] }]"></a-input>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: this.$form.createForm(this, { name: 'coordinated' }),
        }
    },
    methods: {
        handleSubmit() {
            console.log(arguments)
        }
    },
}
</script>

<style>

</style>