<template>
  <page-header-wrapper>
    <a-card
      style="margin-top: 24px"
      :bordered="false">

      <div slot="extra">
        <div class="operate">
            <a-button type="primary" class="addAdmin" @click="visible = true">{{ $t('add') }}</a-button>
        </div>

        <a-radio-group v-model="status">
          <a-radio-button value="all">全部</a-radio-button>
          <a-radio-button value="processing">进行中</a-radio-button>
          <a-radio-button value="waiting">等待中</a-radio-button>
        </a-radio-group>
        <a-input-search style="margin-left: 16px; width: 272px;" />
      </div>
      
      <a-table :data-source="data" :columns="columns">
        <a slot="account" slot-scope="text, record">
          <a-avatar :src="record.avatar" />
          {{ text }}
        </a>
      </a-table>

    </a-card>

    <a-modal
      :title="title"
      width="40%"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="editOrCreate"
      @cancel="visible = false"
    >
     
    <module-form v-if="visible"></module-form>
    </a-modal>

  </page-header-wrapper>
</template>

<script>
import { getList } from '@/api/admin'
import ModuleForm from "./modules/form"

const columns = [
  {
    title: '账号',
    key: 'account',
    dataIndex: 'account',
    scopedSlots: { customRender: 'account' },
  },
  {
    title: '简介',
    key: 'description',
    dataIndex: 'description',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: 'Phone',
    key: 'phone',
    dataIndex: 'phone',
  },
  {
    title: '创建时间',
    key: 'created_at',
    dataIndex: 'created_at',
  }
];

const data = []
export default {
  name: 'AdminList',
  components: {
    ModuleForm
  },
  data () {
    return {
      data: [],
      status: 'all',
      columns,
      page: 1,
      pagination: {
        onChange: page => {
          this.page = page
          this.getList()
        },
        showSizeChanger: true, 
        showQuickJumper: true, 
        pageSize: 20, 
        total: 50
      },
      title: "新增",
      visible: false,
      confirmLoading: false,
      form: {}
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList() {
      let params = {
        page: this.page,
        pageSize: this.pageSize
      }
      getList(params).then( ({data}) => {
        this.data = data.list
        console.log(this.data)
      })
    },

    add() {
      this.visible = true
    },

    editOrCreate () {

    },
    edit (record) {
      
    }
  }
}
</script>

<style lang="less" scoped>
.ant-avatar-lg {
    width: 48px;
    height: 48px;
    line-height: 48px;
}

.list-content-item {
    color: rgba(0, 0, 0, .45);
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 40px;

    span {
        line-height: 20px;
    }

    p {
        margin-top: 4px;
        margin-bottom: 0;
        line-height: 22px;
    }
}
.operate {
  float: left;
  margin-right: 20px;
}
</style>
