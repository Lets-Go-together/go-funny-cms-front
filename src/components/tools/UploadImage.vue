<template>
    <div>
        <a-upload name="file" list-type="picture-card" class="image-uploader" :show-upload-list="false" :action="url" :data="data" :before-upload="beforeUpload" @change="handleChange">
            <img v-if="image" :src="image" alt="image" />
            <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
            </div>
        </a-upload>
    </div>
</template>

<script>
import { getQiniuInfo } from '@/api/upload';
import { randomString } from '@/components/_util/util';

export default {
    name: 'UploadImage',
    props: {
        imgUrl: {
            type: String,
            default: () => {
                return '';
            }
        }
    },
    data() {
        return {
            image: 'https://cdn.surest.cn/uploads/t4zDf6BwrMWhA8sjzeEaWxhYCwsCpt4P',
            loading: false,
            url: '',
            upload_dir: '',
            host: '',
            data: {
                token: '',
                key: ''
            }
        };
    },

    created() {
        this.setUploadInfo();
        this.image = this.imgUrl;
    },

    methods: {
        // 获取上传信息
        setUploadInfo() {
            getQiniuInfo().then(({ data }) => {
                const { bucket, token, url, host, upload_dir } = data;
                this.url = url;
                this.data.token = token;
                this.host = host;
                this.upload_dir = upload_dir;
                this.data.key = this.upload_dir + randomString();
            });
        },

        handleChange(info) {
            this.data.key = this.upload_dir + randomString();
            if (info.file.status === 'uploading') {
                this.loading = true;
                return;
            }
            if (info.file.status === 'done') {
                this.loading = false;
                let filename = this.host + info.file.response.key;
                this.uploadedImage(filename);
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

        /**
         * 文件上传成功
         */
        uploadedImage(filename) {
            this.image = filename;
            this.$emit('update:imgUrl', filename);
        }
    }
};
</script>
<style lang="less" scoped>
.image-uploader {
    img {
        width: 102px;
        height: 102px;
        object-fit: cover;
    }
}</style
>>
