import axios from 'axios'

const servies = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// 路由拦截
// 请求拦截
// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
// 响应拦截
// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      window.location.href = '#/login'
    }
    return Promise.reject(error)
  }
)

export const get = (url, params) => servies.get(url, { params })

export const post = (url, modle) => servies.post(url, model)
