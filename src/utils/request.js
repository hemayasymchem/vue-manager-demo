import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
// import { getToken } from "./auth";
import router from '@/router'


// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API,
    withCredentials: true,
    // timeout: 3000,
})

// request拦截器
service.interceptors.request.use(config => {
  if ( !true ) {
    config.headers['authId'] = 'authId'
  }
  return config
}, error => {
  Promise.reject(error)
})


// response拦截器
service.interceptors.response.use(response => {
  const { data } = response
  console.log(data,typeof data)
  if ( (typeof data) == 'object' ) {
      Message({
        message: 'Cookie验证过期,请重新登录',
        type: 'info'
      })
      router.push({path: '/'})
  }
  return response
}, error => {
  return Promise.reject(error)
})


export default service
