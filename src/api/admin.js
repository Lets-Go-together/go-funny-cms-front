import request from '@/utils/request'

export function getList (params) {
    return request({
      url: "/admin",
      method: 'get',
      params
    })
  }

export function add (params) {
    return request({
      url: "/admin",
      method: 'post',
      data: params
    })
  }

export function update (id, params) {
    return request({
      url: `/admin/${id}`,
      method: 'put',
      data: params
    })
  }

  export function del (id) {
    return request({
      url: `/admin/${id}`,
      method: 'delete',
    })
  }