<template>
    <div>
        <template v-for="tag in tags">
            <a-tag :key="tag" color="#108ee9" :closable="true" @close="() => handleClose(tag)">
                {{ tag }}
            </a-tag>
        </template>
        <a-input v-if="inputVisible" ref="input" type="text" size="small" :style="{ maxWidth: '160px' }" :value="inputValue" @change="handleInputChange" @blur="handleInputConfirm" @keyup.enter="handleInputConfirm" />
        <a-tag v-else style="background: #fff; borderStyle: dashed; cursor: pointer;" @click="showInput"> <a-icon type="plus" />{{ title }}</a-tag>
    </div>
</template>
<script>
export default {
    props: {
        vtags: {
            type: Array,
            default: () => {
                return [];
            }
        },
        title: {
            type: String,
            default: () => {
                return 'New Tags';
            }
        }
    },
    data() {
        return {
            tags: [],
            inputVisible: false,
            inputValue: ''
        };
    },
    methods: {
        handleClose(removedTag) {
            const tags = this.tags.filter(tag => tag !== removedTag);
            console.log(tags);
            this.tags = tags;
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick(function() {
                this.$refs.input.focus();
            });
        },

        handleInputChange(e) {
            this.inputValue = e.target.value;
        },

        handleInputConfirm() {
            const inputValue = this.inputValue;
            let tags = this.tags;
            if (inputValue && tags.indexOf(inputValue) === -1) {
                tags = [...tags, inputValue];
            }
            console.log(tags);
            Object.assign(this, {
                tags,
                inputVisible: false,
                inputValue: ''
            });
        }
    },
    watch: {
        vtags(tags) {
            this.tags = tags;
        },
        tags(tags) {
            this.$emit('update:vtags', tags);
        }
    },
    mounted() {
        this.tags = this.vtags;
    }
};
</script>
