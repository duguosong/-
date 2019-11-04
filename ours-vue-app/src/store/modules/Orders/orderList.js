import {
  getOrderList,
  getOrderDetailById,
  delOrderById,
  createOrder
} from "../../../services/service"
export default {
  namespaced: true,
  state: {
    list: [],
    obj: {}
  },
  actions: {
    async getOrderList({ commit, dispatch }, payload) {
      const result = await getOrderList(payload)
      commit("ss", payload)
      result.data.orders.forEach(i => {
        dispatch("getOrderDetailById", i._id)
      })
    },
    async getOrderDetailById({ commit }, payload) {
      const result = await getOrderDetailById(payload)
      console.log(result.data.details)
      commit("save", result.data.details)
    },
    async delOrderById({ commit, dispatch }, payload) {
      const result = await delOrderById(payload)
      console.log(result)
      dispatch("getOrderList")
    },
    async createOrder({ commit }, payload) {
      const result = await createOrder(payload)
      console.log(result.data)
      commit("sss", result.data)
    }
  },
  mutations: {
    ss(state, payload) {
      state.list = []
    },
    save(state, payload) {
      payload.forEach(i => {
        state.list.push(i)
      })
    },
    sss(state, payload) {
      state.obj = payload
    }
  }
}
