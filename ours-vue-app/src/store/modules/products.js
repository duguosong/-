import { products } from '../../services/service'
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      console.log(payload)
      const result = await products({
        product_category: '5db29f6ee6d9ba15f812611c'
      })
      commit('save', result.data.products)
    }
  },
  mutations: {
    save(state, payload) {
      console.log(payload)
      state.list = payload
    }
  }
}
