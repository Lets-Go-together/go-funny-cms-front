import request from '@/utils/request';

export function uploadImage(data) {
    return (async function upload() {
        signData = await getUplaodSign().then(response => {
            const signData = response.data;
            return signData;
        });
        const { uploadUrl, token, host, dir } = signData;

        data.append('token', token);
        const result = await request({
            url: uploadUrl,
            method: 'post',
            data: data
        }).then(({ hash, key }) => {
            return {
                file: host + key
            };
        });

        return result;
    })();
}

/**
 *
 * {"data":{"token":"puNSHQflTCffx8r1AHB9fJ0wv__FDKdvdgFYOYMP:ZvQMGfg-4hDBsYPXeWMWe7dEF30=:eyJzYXZlS2V5IjoidHJta1wvdXBsb2Fkc1wvMjAyMTA0MjZcLzYyZDA3NzkzNWE2ZGI3YjA4ODZlYzViNjRhZDUyMTFkJChleHQpIiwic2NvcGUiOiJ0cm1rLXRlYWNoZXIiLCJkZWFkbGluZSI6MTYxOTQzNDk0NX0=","host":"https:\/\/t.trmk-cdn.teachingrecord.com\/","buket":"trmk-teacher","uploadUrl":"https:\/\/upload-as0.qiniup.com\/","dir":"trmk\/uploads\/20210426\/"},"message":"Success","code":200}
 */
/**
 * 获取上传秘钥信息
 */
export function getUplaodSign(params) {
    return request({
        url: '/upload-sign',
        method: 'get',
        params: params
    });
}
