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
      url: "/permission/store",
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
      url: `/role/save`,
      method: 'put',
      data: params
    })
  }

  export function del (id) {
    return request({
      url: `/role/delete`,
      method: 'delete',
      data: {id: id}
    })
  }

  export function getPermisstionTree () {
    return request({
      url: `/permission/tree`,
      method: 'get',
    })
  }