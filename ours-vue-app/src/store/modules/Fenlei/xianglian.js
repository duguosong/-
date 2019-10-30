import { products } from "../../../services/service"
export default {
  namespaced: "true",
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await products(payload)
      commit("save", result.data)
    }
  },
  mutations: {
    save(state, payload) {
      console.log(payload)
      state.list = payload
    }
  }
}
