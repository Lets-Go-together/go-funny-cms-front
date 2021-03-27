import request from '@/utils/request'

export function getList(params) {
    return request({
        url: "/permission",
        method: 'get',
        params
    })
}

export function add(params) {
    return request({
        url: "/permission/store",
        method: 'post',
        data: params
    })
}

export function update(params) {
    return request({
        url: `/permission/save`,
        method: 'put',
        data: params
    })
}

export function del(id) {
    return request({
        url: `/permission/delete`,
        method: 'delete',
        data: {id: id}
    })
}
export function getPermisstionTree() {
    return request({
        url: `/permission/tree`,
        method: 'get',
    })
}