import { addressesNew } from "../../../services/service"
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await addressesNew(payload)
      console.log(result)
    }
  }
  // mutations: {}
}
