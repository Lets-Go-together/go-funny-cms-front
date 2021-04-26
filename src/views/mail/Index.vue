<template>
    <page-header-wrapper>
        <a-card>
            <a-tabs default-active-key="1">
                <a-tab-pane key="1" tab="已发送">
                    <Outbox />
                </a-tab-pane>
                <a-tab-pane key="2" tab="回收站">
                    <Recovery />
                </a-tab-pane>
            </a-tabs>
        </a-card>
    </page-header-wrapper>
</template>

<script>
import Recovery from './modules/recovery';
import Outbox from './modules/outbox';
export default {
    components: {
        Outbox,
        Recovery
    },
    mixins: [],
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    watch: {}
};
</script>
