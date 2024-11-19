import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {

  state: () =>{
    return{
      num: 0,
      // nome: "",
      // users: [],
      // products:{}
    }
  },

  getters:{

  },

  actions:{
    increment(){
      this.num++;
    },
    decrement(){
      this.num--;
    }
  }
})
