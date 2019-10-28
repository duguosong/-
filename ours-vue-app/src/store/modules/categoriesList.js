import { categoriesList } from '../../services/service'
export default {
  namespaced: true,
  state: {
    list: [],
    listone: [],
    listtwo: [],
    listthree: []
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await categoriesList()
      commit('save', result.data)
    }
  },
  mutations: {
    save(state, payload) {
      state.list = payload.categories.reverse()
      console.log(state.list)
    }
  }
}
