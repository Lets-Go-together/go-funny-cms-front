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
      url: "/admin/store",
      method: 'post',
      data: params
    })
  }

export function update (id, params) {
    return request({
      url: `/admin/save`,
      method: 'put',
      data: params
    })
  }

export function del (id) {
    return request({
      url: `/admin/delete`,
      method: 'delete',
      data: {id: id}
    })
  }

export function getRoleTree() {
    return request({
      url: `/admin/tree`,
      method: 'get'
    })
  }