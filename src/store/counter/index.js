import counterMutations from './mutations';
import counterActions from './actions';
import counterGetters from './getters';



//=================================== Module Counter 

export default{
    namespaced: true,
    state: {
      count: 7,
      name: 'Yassine'
    },
    mutations: counterMutations,

    getters: counterGetters,

    actions: counterActions
  }

  //================================================ end block Counter  