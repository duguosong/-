import { products } from "../../../services/service"
export default {
  namespaced: "true",
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      const resule = await products(payload)
      commit("save", resule.data.products)
    }
  },
  mutations: {
    save(state, payload) {
      state.list = payload
    }
  }
}
