import { products } from "../../../services/service"
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await products(payload)
      commit("save", result.data.products)
      console.log(result.data.products)
    }
  },
  mutations: {
    save(state, payload) {
      state.list = payload
    }
  }
}
