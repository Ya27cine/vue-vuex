

export default{
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
}