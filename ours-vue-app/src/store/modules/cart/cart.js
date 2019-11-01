import { addCart, getCartList } from "../../../services/service"
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit, dispatch }, payload) {
      const result = await addCart(payload)
      console.log("加入购物车", result)
      dispatch("loadCartList")
    },
    async loadCartList({ commit }, payload) {
      const result = await getCartList()
      console.log(result.data)
      commit("save", result.data)
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
    }
  }
}
