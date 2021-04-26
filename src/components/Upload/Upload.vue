<template>
    <div>
        <a-upload-dragger :headers="headers" v-if="drag" name="file" :multiple="true" :action="url" @change="handleChange">
            <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text">{{ uploadText }}</p>
            <p class="ant-upload-hint">{{ uploadHint }}</p>
        </a-upload-dragger>

        <a-upload v-else :action="url" :data="data" :before-upload="beforeUpload" @change="handleChange">
            <a-button> <a-icon :type="loading ? 'loading' : 'plus'" /> Upload </a-button>
        </a-upload>
    </div>
</template>
<script>
import { getQiniuInfo } from '@/api/upload';
import { randomString } from '@/components/_util/util';
export default {
    props: {
        multiple: {
            type: Boolean,
            default: () => {
                return true;
            }
        },

        drag: {
            type: Boolean,
            default: () => {
                return false;
            }
        },

        uploadText: {
            type: String,
            default: () => {
                return 'Click or drag file to this area to upload';
            }
        },

        uploadHint: {
            type: String,
            default: () => {
                return 'Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files';
            }
        },

        fileList: {
            type: Array,
            default: () => {
                return [
                    {
                        uid: '-1',
                        name: 'xxx.png',
                        status: 'done',
                        url: 'http://www.baidu.com/xxx.png'
                    }
                ];
            }
        }
    },
    data() {
        return {
            headers: {
                Authorization: 'Bearer ' + this.getToken()
            },
            action: '/api/upload',
            loading: false,
            url: '',
            upload_dir: '',
            host: '',
            data: {
                token: '',
                key: ''
            },
            fileLists: []
        };
    },
    watch: {
        // fileList(fileList) {
        //     this.$emit('update:fileList', fileList);
        // }
    },
    mounted() {
        this.setUploadInfo();
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

        getToken() {
            return this.$store.getters.token;
            // return this.modules.user.token;
        },
        beforeUpload() {},

        handleChange(info) {
            this.data.key = this.upload_dir + randomString();
            console.log(info);
            if (info.file.status === 'uploading') {
                this.loading = true;
            }
            if (info.file.status === 'done') {
                this.loading = false;
                let filename = this.host + info.file.response.key;
                this.fileList = this.fileList.concat(filename);
            }
        }
    }
};
</script>
