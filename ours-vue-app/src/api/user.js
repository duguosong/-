import request, { post, get } from "../utils/request"

// 注册
export function reg(data) {
  return post("/api/v1/auth/reg", data)
}

// 登录
export function login(data) {
  return post("/api/v1/auth/login", data)
}

// 获取用户信息
export function getInfo(token) {
  return request({
    url: " /api/v1/users/info",
    method: "get",
    params: { token }
  })
}

export function logout() {
  return request({
    url: "/user/logout",
    method: "post"
  })
}
