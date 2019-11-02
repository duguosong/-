import { addCart, getCartList, delCartOne } from "../../../services/service"
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit, dispatch }, payload) {
      const result = await addCart(payload)
      console.log("加入购物车", result)
      dispatch("loadCartList", 1)
    },
    async loadCartList({ commit }, payload) {
      console.log(payload)
      const result = await getCartList()
      console.log(result.data)
      commit("save", result.data)
    },
    async delCartOne({ commit, dispatch }, payload) {
      const result = await delCartOne(payload)
      console.log(result, 20)
      dispatch("loadCartList")
    }
  },
  mutations: {
    save(state, payload) {
      payload.forEach(item => {
        item.isCheck = false
      })
      state.list = payload
    }
  },
  getters: {
    cartCount(state) {
      let sum = 0
      state.list.forEach(item => {
        sum += item.quantity
      })
      return sum
    },
    zongjia(state) {
      let price = 0
      state.list.forEach(i => {
        if (i.isCheck == true) {
          console.log(i)
          price += i.quantity * i.product.price
        }
      })
      return price
    }
  }
}
