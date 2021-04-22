<template>
    <a-form-model ref="ruleForm" :rules="rules" :model="modelForm" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-form-model-item label="Id" prop="id" v-if="modelForm.id">
            <a-input v-model="modelForm.id" disabled />
        </a-form-model-item>

        <a-form-model-item label="主题" prop="subject">
            <a-input v-model="modelForm.subject" allow-clear />
        </a-form-model-item>

        <a-form-model-item label="内容" prop="content">
            <Tinymce :value.sync="modelForm.content" />
        </a-form-model-item>

         <a-form-model-item label="附件" prop="attachments">
            <a-input-number v-model="modelForm.attachments" allow-clear />
        </a-form-model-item>

         <a-form-model-item label="发送时间" prop="send_at">
            <a-input v-model="modelForm.component" allow-clear />
        </a-form-model-item>

        <a-form-model-item label="配置选择" prop="mailer">
            <a-select v-model="modelForm.mailer">
                <a-select-option value="jack" v-for="mailer in mailers" :key="mailer.id">{{ mailer.label }}</a-select-option>
            </a-select>
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ offset: 4 }">
            <a-button type="primary" @click="onSubmit" :loading="loading">确认</a-button>
            <a-button style="margin-left: 10px;" @click="$emit('close')">取消</a-button>
        </a-form-model-item>
    </a-form-model>
</template>
<script>
import { update, add, getMenuTree } from '@/api/mail';
import Tinymce from '@/components/Tinymce'

export default {
    name: 'ModuleForm',
    components: { Tinymce },
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
            rules: {
                subject: [{ required: true, message: "请输入主题", tigger: 'blur' }],
                content: [{ required: true, message: "请输入内容", tigger: 'blur' }],
            },
            loading: false,
            mailers: [
                {
                    id: 1,
                    label: "邮件" 
                }
            ]
        };
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if(valid) {
                    let operate;
                    if (this.modelForm.id) {
                        operate = update(this.modelForm.id, this.modelForm);
                    } else {
                        operate = add(this.modelForm);
                    }
                    this.loading = true
                    operate.then((res) => {
                        this.$message.success('Success');
                        this.loading = false
                        this.$emit('success')
                    }).catch(() => {
                        this.loading = false
                    })
                }
            });
        }
    },

    async mounted() {
        this.modelForm = Object.assign(this.formData, {
            status: this.formData.status == 2 ? true : false,
            hidden: this.formData.hidden == 1 ? true : false,
        });
        
    }
};
</script>
