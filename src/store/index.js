import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      count:0,
      sum:0,
      allCounter:[]
    },
    mutations:{
      addCounter (state,data) {
        state.allCounter[data].counter ++;
      },
      reduceCounter(state,data) {
        state.allCounter[data].counter --;
      },
      addCounterList (state,data){
        state.allCounter = data;
      },
      countSum(state){
        state.sum = 0;
        for(let i=0;i<state.allCounter.length;i++){
            state.sum += state.allCounter[i].counter
        }
      }
    },
    getters:{
      countSum: state =>{
        return state.count;
      }
    }
  })
  
    
  export default store;