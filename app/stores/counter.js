import{defineStore}from "pinia"
export const useCounterStore=defineStore('counter',{
    //sate,getters,actions
    state:()=>({
        count:0
    }),
    getters:{
        doubleCount:(state)=>state.count*2
    },
    actions:{
        increment(){
            this.count++
        },
         decrement(){
            this.count--
        }
    }
})