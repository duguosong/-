import { addressesList, addressDelByID } from "../../../services/service"
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      console.log(payload)
      const result = await addressesList(payload)
      commit("save", result.data.addresses)
    },
    async loadDel({ commit }, payload) {
      console.log(payload)
      const result = await addressDelByID(payload)
      const res = await addressesList()
      commit("save", res.data.addresses)
    }
  },
  mutations: {
    save(state, payload) {
      console.log(payload)
      state.list = payload
    }
    // ss(state, payload) {
    //   console.log(payload)
    //   state.sss = payload
    //   console.log(state.sss)
    // }
  }
}
