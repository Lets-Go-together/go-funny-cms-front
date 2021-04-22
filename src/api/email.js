import request from '@/utils/request';

export function getList(params) {
    return request({
        url: '/email',
        method: 'get',
        params
    });
}

export function add(params) {
    return request({
        url: '/email/store',
        method: 'post',
        data: params
    });
}

export function update(id, params) {
    return request({
        url: `/email/save`,
        method: 'put',
        data: params
    });
}

export function del(id) {
    return request({
        url: `/admin/delete`,
        method: 'delete',
        data: { id: id }
    });
}
