import request from '@/utils/request'
import qs from 'qs'


/**
 *
 * @param {string} managerName 账号
 * @param {string} managerPwd  密码 经过MT_5 转译
 */
export function login(params) {
  return request ({
    url: '/authorization/logining',
    method: 'post',
    data: qs.stringify(params)
  })
}


