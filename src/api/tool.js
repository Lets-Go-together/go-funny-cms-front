import request from '@/utils/request'

export function uploadImage(data) {
    return async function upload() {
        signData = await getUplaodSign().then(response => {
            const signData = response.data
            return signData
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
            }
        });
        
        return result
    }();
}