import { createStore } from 'vuex'



//=================================== Module Counter 
const counterModule = {
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
    getName(state){
      return state.name.toUpperCase();
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
  }
}
//================================================ end block Counter 




//=================================== Module Category 
const categoryModule = {
  state: {
    categories: []
  },
  mutations: {
    addCategory(category){},
    updateCategory(id, category){},
    deleteCategory(id){}

  },
  getters: {
    getCategories(state){}
  },
  actions: {
    persistCategory({ commit }, payload){}
  }
}
//================================================ end block Category 



export default createStore({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  },
  modules: {
    counterModule,
    categoryModule
  }
})