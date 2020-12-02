<template>
  <page-header-wrapper>
    <a-card
      style="margin-top: 24px"
      :bordered="false">

      <div slot="extra">
        <div class="operate">
            <a-button type="primary" class="addAdmin" @click="add">{{ $t('add') }}</a-button>
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
  </page-header-wrapper>
</template>

<script>
// 演示如何使用 this.$dialog 封装 modal 组件
import TaskForm from './modules/Form'
import Info from './components/Info'
import { getList } from '@/api/admin'


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
    TaskForm,
    Info
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
      }
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

    add () {
      this.$dialog(TaskForm,
        // component props
        {
          record: {},
          on: {
            ok () {
              console.log('ok 回调')
            },
            cancel () {
              console.log('cancel 回调')
            },
            close () {
              console.log('modal close 回调')
            }
          }
        },
        // modal props
        {
          title: '新增',
          width: 700,
          centered: true,
          maskClosable: false
        })
    },
    edit (record) {
      console.log('record', record)
      this.$dialog(TaskForm,
        // component props
        {
          record,
          on: {
            ok () {
              console.log('ok 回调')
            },
            cancel () {
              console.log('cancel 回调')
            },
            close () {
              console.log('modal close 回调')
            }
          }
        },
        // modal props
        {
          title: '操作',
          width: 700,
          centered: true,
          maskClosable: false
        })
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
