import { get, post, put, del } from "../utils/request"

/**
 * 根据参数获取商品列表
 * @param {*} params
 */
export function products(params) {
  return get("/api/v1/products", params)
}

// export const products = function(params) {
//   return get('/api/v1//products', params)
// }

/**
 * 根据id获取单个商品信息
 * @param {*} id
 */
export function getProductById(id) {
  return get(`/api/v1/products/${id}`)
}

// /**
//  * 创建一个商品
//  * @param {*} model
//  */
// export function createOne(model) {
//   return post('/api/v1/admin/products', model)
// }

// /**
//  * 根据id修改商品信息
//  * @param {*} id
//  * @param {*} model
//  */
// export function undataById(id, model) {
//   return put(`/api/v1/admin/products/${id}`, model)
// }
// /**
//  * 根据id删除商品
//  * @param {*} id
//  */
// export function delById(id) {
//   return del(`/api/v1/admin/products/${id}`)
// }

/**
 * 用户注册
 * @param {*} model
 */
export function userReg(model) {
  return post("/api/v1/auth/reg", model)
}

/**
 * 用户登录
 * @param {*} model
 */
export function userLogin(model) {
  return post("/api/v1/auth/login", model)
}

/**
 * 根据id获取详情
 * @param {*} id
 */
export function detailById(id) {
  return get(`/api/v1/products/${id}`)
}

/**
 * 用户获取商品分类id
 */
export function categoriesList() {
  return get("api/v1/product_categories")
}

/**
 * 根据参数获取用户地址列表Lxh
 */
export function addressesList(param) {
  return get("api/v1/addresses", param)
}

/**
 * 新增用户地址
 * @param {*} modle
 */
export function addressesNew(modle) {
  return post("api/v1/addresses", modle)
}

/**
 * 根据地址id获取单条收货地址
 * @param {*} id
 */
export function addressOneByID(id) {
  return get(`/api/v1/addresses/${id}`)
}

/**
 * 根据地址id删除
 * @param {*} id
 */
export function addressDelByID(id) {
  return del(`/api/v1/addresses/${id}`)
}

/**
 * 根据地址id修改地址
 */
export function addressputByID(id) {
  return put(`/api/v1/addresses/${id}`)
}
