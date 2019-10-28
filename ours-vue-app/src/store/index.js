import Vue from 'vue'
import Vuex from 'vuex'
import productsList from './modules/productsList'
import products from './modules/products'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    productsList,
    products,
    product
  }
})
