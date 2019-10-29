import { get, post, put, del } from '../utils/request'

/**
 * 根据参数获取商品列表
 * @param {*} params
 */
export function products(params) {
  return get('/api/v1/products', params)
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
  return post('/api/v1/auth/reg', model)
}

/**
 * 用户登录
 * @param {*} model
 */
export function userLogin(model) {
  return post('/api/v1/auth/login', model)
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
  return get('api/v1/product_categories')
}
