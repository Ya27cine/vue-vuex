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
  getters: {
    getCounter(state){
      return state.count * 2;
    },
    getCounterNormalise(_, getters){
      const count =  getters.getCounter;

      if( count < 0   ) return 0;
      if( count > 100 ) return 100;

      return count;
    }
  },
  actions: {
  },
  modules: {
  }
})
