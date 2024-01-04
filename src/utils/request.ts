import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox  } from 'element-plus'
import router from '@/router/index'

const request: AxiosInstance = axios.create({
  timeout: 60000
})

let userId:string, orgId:string, userInfo:any
userInfo = localStorage.getItem("userInfo")
if(JSON.parse(userInfo)){
  userId = userInfo.USER_ID;
  orgId = userInfo.ORG_ID
}

const errorHandle = (error: AxiosError) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        //
        break
      case 500:
        break
      default:
        ElMessage.error(`${error}`)
        break
    }
  }
  return Promise.reject(error)
}

request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if(config.method == 'post' || config.method == 'get'){
    config.headers.userId = userId;
    config.headers.orgId = orgId
  }
  if(config.method == 'get'){
    config.data = {
      unused : 0
    }
  }
  return config
}, errorHandle)

request.interceptors.response.use((response: AxiosResponse) => {
  const res = response.data
  if(res.success) return res
  if(res.result) return res
  if(!response.config.headers.isGroupByType){
    if(res.message != '单位不存在'){
      ElMessage.error(res.msg || res.message || '请求出错')
    }
    if (res.code === 508 || res.code === 50012 || res.code === 50014) {
      ElMessageBox.confirm(
        '登录超时', '提示',{
          confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning',
        }
      ).then(() => {
        router.push('/login')
      })
    }
    return Promise.reject(new Error(res.msg || '请求出错'))
  }
  return response
}, errorHandle)

export default request
