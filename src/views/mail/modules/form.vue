<template>
    <a-form-model ref="ruleForm" :rules="rules" :model="modelForm" :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }">
        <a-form-model-item label="Id" prop="id" v-if="modelForm.id">
            <a-input v-model="modelForm.id" disabled />
        </a-form-model-item>

        <a-form-model-item label="主题" prop="subject">
            <a-input v-model="modelForm.subject" allow-clear />
        </a-form-model-item>

        <a-form-model-item label="接受邮箱" prop="subject">
            <Tags :vtags.sync="modelForm.emails" :title="$t('Add Email')" />
        </a-form-model-item>

        <a-form-model-item label="内容" prop="content">
            <Tinymce :value.sync="modelForm.content" />
        </a-form-model-item>

        <a-form-model-item label="附件" prop="attachments">
            <Upload :defaultFileList.sync="modelForm.attachments" />
        </a-form-model-item>

        <a-form-model-item label="发送时间" prop="send_at">
            <a-date-picker v-model="modelForm.send_at" format="YYYY-MM-DD HH:mm:ss" placeholder="发送时间" style="width: 200px" />
        </a-form-model-item>

        <a-form-model-item label="配置选择" prop="mailer">
            <a-select v-model="modelForm.mailer">
                <a-select-option value="jack" v-for="mailer in mailers" :key="mailer">{{ mailer }}</a-select-option>
            </a-select>
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ offset: 4 }">
            <a-button type="primary" @click="onSubmit" :loading="loading">确认</a-button>
            <a-button style="margin-left: 10px;" @click="$emit('close')">取消</a-button>
        </a-form-model-item>
    </a-form-model>
</template>
<script>
import { update, add, getMailers } from '@/api/email';
import Tinymce from '@/components/Tinymce';
import Tags from '@/components/Tags/Tags';
import Upload from '@/components/Upload/Upload';
export default {
    name: 'ModuleForm',
    components: { Tinymce, Tags, Upload },
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
            modelForm: {
                id: '',
                subject: '',
                emails: [],
                content: '33334',
                attachments: [],
                send_at: undefined,
                mailer: ''
            },
            rules: {
                subject: [{ required: true, message: '请输入主题', tigger: 'blur' }],
                content: [{ required: true, message: '请输入内容', tigger: 'change' }],
                emails: [{ required: true, message: '请输入接受邮箱', tigger: 'blur' }],
                send_at: [{ required: true, message: '请选择发送时间' }]
                // mailer: [{ required: true, message: '请选择配置', tigger: 'blur' }]
            },
            loading: false,
            mailers: []
        };
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.submit();
                }
                console.log(this.modelForm);
            });
        },
        submit() {
            const { modelForm } = this;
            let operate,
                params = Object.assign({}, modelForm, {
                    send_at: modelForm.send_at.format('YYYY-MM-DD HH:mm:ss')
                });
            if (params.id) {
                operate = update(params.id, params);
            } else {
                operate = add(params);
            }
            this.loading = true;
            operate
                .then(res => {
                    this.$message.success('Success');
                    this.loading = false;
                    this.$emit('success');
                })
                .catch(() => {
                    this.loading = false;
                });
        }
    },

    async mounted() {
        const { formData, modelForm } = this;
        Object.assign(this.modelForm, formData, {
            status: formData.status == 2 ? true : false,
            hidden: formData.hidden == 1 ? true : false
        });
        // await getMailers().then(({ data }) => {
        //     this.mailers = data;
        // });
    }
};
</script>
