import { detailById } from '../../services/service'
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await detailById(payload)
      commit('save', result.data)
    }
  },
  mutations: {
    save(state, payload) {
      state.list = []
      for (let i = 0; i < 3; i++) {
        state.list.push(payload)
      }
      console.log(state.list)
    }
  }
}
