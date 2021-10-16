import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 7,
    name: 'Yassine'
  },
  mutations: {
    inc(state){
      state.count *= 7;
    }
  },
  actions: {
  },
  modules: {
  }
})
