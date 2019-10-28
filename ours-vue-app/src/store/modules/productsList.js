import { products } from '../../services/service'
export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await products({
        product_category: '5db2d0855def0f05c8a70ac8'
      })
      commit('save', result.data.products)
    }
  },
  mutations: {
    save(state, payload) {
      state.list = []
      for (let i = 0; i < 4; i++) {
        state.list.push(payload[i])
      }
      //state.list = payload
    }
  }
}

// export default {
//   namespaced: true,
//   state: {
//     query: {},
//     list: [],
//     page: 1,
//   },
//   mutations: {
//     //   save() 第一个参数是 {state} 第二个是payload
//     save(state, payload) {
//       console.log(state, payload);
//       state.list = payload.list;
//       state.page += 1;
//     },
//   },
//   actions: {
//     //  loadData 接受第一个参数 上下文context 第二个参数是payload
//     async loadData({ commit }, payload) {
//       //  commit 第一个参数是 mutations里面的方法sava 第二个参数是payload
//       // commit('save', payload);
//       const res = await axios.get('http://localhost:3000/api/v1/products', {
//         params: {
//           page: payload,
//         },
//       });
//       console.log(res.data);
//       // 发起请求成功后 commit提交mutations触发上面mutations中的save方法 第一个参数是save方法 第二个参数是传的数据
//       commit('save', { list: res.data.products });
//     },
//   },
// };
