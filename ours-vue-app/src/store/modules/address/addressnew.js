import { addressesNew, addressputByID } from "../../../services/service"
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await addressesNew(payload)
      console.log(result)
    },
    async upData({ commit }, payload) {
      console.log(payload)
      const result = await addressputByID(payload.id, payload.obj1)
      console.log(result)
    }
  }
  // mutations: {}
}
