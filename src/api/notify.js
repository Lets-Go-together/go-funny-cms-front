import request from '@/utils/request';

export function getList(params) {
    return request({
        url: '/notify',
        method: 'get',
        params
    });
}