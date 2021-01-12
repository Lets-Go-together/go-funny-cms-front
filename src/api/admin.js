import request from '@/utils/request'

export function getList (params) {
    return request({
      url: "/admin",
      method: 'get',
      data: params
    })
  }

export function add () {
    return request({
      url: "/admin",
      method: 'post',
      params
    })
  }

export function update (id, params) {
    return request({
      url: `/admin/${id}`,
      method: 'put',
      data: params
    })
  }