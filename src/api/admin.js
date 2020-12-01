import request from '@/utils/request'

export function getList (params) {
    return request({
      url: "/admin/list",
      method: 'get',
      data: params
    })
  }