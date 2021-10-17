import { createStore } from 'vuex'
import counterModule from './counter'
import categoryModule from './category'


export default createStore({
  modules: {
    counter: counterModule,
    category: categoryModule
  }
})