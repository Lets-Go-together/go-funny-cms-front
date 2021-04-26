import request from '@/utils/request';

export function getList(params) {
    return request({
        url: '/mail',
        method: 'get',
        params
    });
}

export function getMailers(params) {
    return request({
        url: '/mail/mailer',
        method: 'get',
        data: params
    });
}

export function add(params) {
    return request({
        url: '/mail/store',
        method: 'post',
        data: params
    });
}

export function update(id, params) {
    return request({
        url: `/mail/save`,
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
