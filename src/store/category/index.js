//=================================== Module Category 
import categoryMutations from './mutations';
import categoryGetters from './getters';
import categoryActions from './actions';



export default {
  namespaced: true,
  state: {
    categories: []
  },

  mutations: categoryMutations,

  getters: categoryGetters,
  
  actions: categoryActions
}
//================================================ end block Category 