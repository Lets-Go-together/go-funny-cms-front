import request from '@/utils/request'

export function getList (params) {
    return request({
      url: "/admin",
      method: 'get',
      data: params
    })
  }