import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
import productsList from "./modules/productsList"
import products from "./modules/products"
import product from "./modules/product"
import detail from "./modules/detail"
import categoriesList from "./modules/categoriesList"
// 分类模块
import hot from "./modules/Fenlei/hot"
import jiezhi from "./modules/Fenlei/jiezhi"
import shouzhuo from "./modules/Fenlei/shouzhuo"
import xianglian from "./modules/Fenlei/xianglian"
import zhuanyunzhu from "./modules/Fenlei/zhuanyunzhu"

// 地址模块
import addressList from "./modules/address/index"
import addressnew from "./modules/address/addressnew"
import addressOneByID from "./modules/address/addressOneByID"
import addCart from "./modules/cart/cart"

// 订单模块
import orderList from "./modules/Orders/orderList"
import { stat } from "fs"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    str: "",
    st: "",
    plist: [],
    add: {}
  },
  mutations: {
    ss(state, payload) {
      state.str = payload
      console.log(payload)
    },
    sav(state, payload) {
      state.st = payload
    },
    product(state, payload) {
      console.log(payload)
      state.plist = payload
    },
    address(state, payload) {
      state.add = payload
    }
  },
  actions: {},
  modules: {
    productsList,
    products,
    product,
    detail,
    categoriesList,
    hot,
    jiezhi,
    shouzhuo,
    xianglian,
    zhuanyunzhu,
    addressList,
    addressnew,
    addressOneByID,
    addCart,
    orderList
  }
})
