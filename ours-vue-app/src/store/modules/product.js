import { products } from '../../services/service'
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await products({
        product_category: '5db2e5635def0f05c8a70ac9'
      })
      commit('save', result.data.products)
    }
  },
  mutations: {
    save(state, payload) {
      state.list = payload
      console.log(payload)
    }
  }
}
