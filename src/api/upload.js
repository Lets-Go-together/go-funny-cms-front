import request from '@/utils/request'

// 获取七牛云上传配置信息
export function getQiniuInfo (parameter) {
    return request({
      url: "/qiniu",
      method: 'get',
      data: parameter
    })
  }