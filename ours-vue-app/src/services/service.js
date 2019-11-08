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
 * @param {*} id
 * @param {*} model
 */
export function addressputByID(id, model) {
  return put(`/api/v1/addresses/${id}`, model)
}

/**
 * 加入购物车
 * @param {*} model
 */
export function addCart(model) {
  return post("/api/v1/shop_carts", model)
}

/**
 * 获取用户购物车列表
 */
export function getCartList() {
  return get("/api/v1/shop_carts")
}

/**
 * 根据商品id删除购物车该商品
 * @param {*} id
 */
export function delCartOne(id) {
  return del(`/api/v1/shop_carts/${id}`)
}

/**
 * 获取订单列表
 */
export function getOrderList() {
  return get("/api/v1/orders")
}

/**
 * 根据id获取订单详情
 * @param {*} id
 */
export function getOrderDetailById(id) {
  return get(`/api/v1/orders/${id}`)
}

/**
 * 根据id删除订单
 * @param {*} id
 */
export function delOrderById(id) {
  return del(`/api/v1/orders/${id}`)
}

/**
 * 订单提交
 * @param {*} model
 */
export function createOrder(model) {
  return post("/api/v1/orders", model)
}
