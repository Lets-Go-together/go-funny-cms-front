import request from '@/utils/request'

export function getList(params) {
    return request({
        url: "/menu",
        method: 'get',
        params
    })
}

export function add(params) {
    return request({
        url: "/menu/store",
        method: 'post',
        data: params
    })
}

export function update(params) {
    return request({
        url: `/menu/save`,
        method: 'put',
        data: params
    })
}

export function del(id) {
    return request({
        url: `/menu/delete`,
        method: 'delete',
        data: {id: id}
    })
}
export function getMenuTree() {
    return request({
        url: `/menu/tree`,
        method: 'get',
    })
}