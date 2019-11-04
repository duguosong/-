import { addressOneByID } from "../../../services/service"
export default {
  namespaced: true,
  state: {
    list: {
      name: "",
      tel: "",
      province: "",
      city: "",
      county: "",
      addressDetail: "",
      areaCode: ""
    },
    listnew: {}
  },
  actions: {
    async loadData({ commit }, payload) {
      console.log(payload)
      const result = await addressOneByID(payload)
      console.log(result)
      commit("save", result.data)
    }
  },
  mutations: {
    save(state, payload) {
      console.log(payload)
      state.list.name = payload.receiver
      state.list.tel = payload.mobile
      state.list.addressDetail = payload.address
      state.list.areaCode = payload.regions.split("-")[3]
      state.list.province = payload.regions.split("-")[0]
      state.list.city = payload.regions.split("-")[1]
      state.list.county = payload.regions.split("-")[2]
    }
  }
}
