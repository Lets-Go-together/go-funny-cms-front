<template>
    <div>
        <a-modal v-model="show" :title="title" :cancelText="false" @ok="handleOk">
            <div v-html="content"></div>
        </a-modal>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: () => {
                return '';
            }
        },
        visible: {
            type: Boolean,
            default: () => {
                return false;
            }
        },
        title: {
            type: String,
            default: () => {
                return '';
            }
        }
    },
    data() {
        return {
            show: false
        };
    },
    methods: {
        handleOk() {
            this.$emit('update:visible', false);
        }
    },
    watch: {
        visible(val) {
            this.show = val;
        },
        show(val) {
            this.$emit('update:visible', val);
        }
    }
};
</script>

<style></style>
