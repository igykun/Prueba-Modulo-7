import { createStore } from "vuex";

export default createStore({
  state:{
    number:0
  },
  mutations:{
    numberUp(state){
      state.number++;
    },
    numberDown(state){
      state.number--;
    }
  },
  actions:{

  },
  modules:{

  },
})
