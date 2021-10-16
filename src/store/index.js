import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 7,
    name: 'Yassine'
  },
  mutations: {
    inc(state, payload){
      state.count *= payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
