import { products } from "../../../services/service"
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      console.log(payload)
      const result = await products(payload)
      console.log(result.data)
      commit("save", result.data.products)
    }
  },
  mutations: {
    save(state, payload) {
      console.log(payload)
      state.list = payload
    }
  }
}
