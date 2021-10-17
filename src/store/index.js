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
      const counter =  getters.getCounter;

      if( counter < 0   ) return 0;
      if( counter > 100 ) return 100;

      return counter;
    },
  },
  actions: {
    actionIncCounter({ commit }, payload){
      // console.log(context)
      commit('inc', payload)
    }
  },
  modules: {
  }
})
