import { addressesList, addressDelByID } from "../../../services/service"
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await addressesList(payload)
      commit("save", result.data.addresses)
    },
    async loadDel({ commit, dispatch }, payload) {
      console.log(payload)
      const result = await addressDelByID(payload)
      dispatch("loadData")
    }
  },
  mutations: {
    save(state, payload) {
      console.log(payload)
      payload.forEach(i => {
        i.regions = i.regions
          .split("-")
          .splice(0, 3)
          .join("-")
      })
      state.list = payload
    }
  }
}
