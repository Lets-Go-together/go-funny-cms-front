import request from '@/utils/request'

export function getList (params) {
    return request({
      url: "/role",
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

export function getRole (params) {
  return request({
    url: "/role/show",
    method: 'get',
    params
  })
}

export function update (params) {
    return request({
      url: `/role`,
      method: 'put',
      data: params
    })
  }

  export function del (id) {
    return request({
      url: `/role/${id}`,
      method: 'delete',
    })
  }

  export function getPermisstionTree () {
    return request({
      url: `/permission/tree`,
      method: 'get',
    })
  }