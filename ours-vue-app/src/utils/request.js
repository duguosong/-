import axios from "axios"

const instance = axios.create({
  baseURL: "http://192.168.17.65:3000",
  timeout: 5000 //全局超时时间
})

// 全局响应拦截 和 全局请求拦截

// Add a request interceptor
// 全局请求拦截
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // 为config设置一个属性 这个属性表示 为全局的网络请求设置一个请求头
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
// 全局响应拦截
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // 服务器端返回了一个结果(有响应)并且服务器端返回给我的状态码是401的时候 跳转到登录页
    console.log(error)
    if (error.response && error.response.status === 401) {
      window.location.href = "#/login"
      console.log("执行了")
    }
    return Promise.reject(error)
  }
)
// get请求第二个参数是params
export const get = (url, params) => instance.get(url, { params })
// post请求第二个参数是data
export const post = (url, data) => instance.post(url, data)

export const put = (url, data) => instance.put(url, data)

export const del = (url, data) => instance.delete(url, data)

export default instance
