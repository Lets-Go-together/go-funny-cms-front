import request from '@/utils/request'

export function getList (params) {
    return request({
      url: "/permission",
      method: 'get',
      params
    })
  }

export function add (params) {
    return request({
      url: "/permission",
      method: 'post',
      data: params
    })
  }

export function update (id, params) {
    return request({
      url: `/permission/${id}`,
      method: 'put',
      data: params
    })
  }

  export function del (id) {
    return request({
      url: `/permission/${id}`,
      method: 'delete',
    })
  }