import Vue from "vue";
import Vuex from "vuex";
import  apis from "@/core/api/apis"

Vue.use(Vuex);       //this.$store.state

export default new Vuex.Store({
  state: {     //全局属性变量  data
    msg:"Msea",
    name:"苹果",
    price:18,
    num:0,
    goodsList:[]
  },
  mutations:{
            //mutations,操作state方法,写函数
            //在组件调用 Vuex mutations方法 使用 commit
            //不要在组件操作 Vuex state
            //   mutations 方法 第一参数 固定就 state
      add(state,data){
        // console.log(state);
        state.num++;
        // console.log(data)
      }      
  },
  getters:{
            //类似 组件内的 computed,函数名字 直接当变量去用
    count(state){
      return state.num*state.price;
    }

  },
  actions:{
      //actions 异步函数,一般写通用接口
      //固定写法第一个参数 写一个 context    //state  getters  commit dispatch
      // actions 里面的方法 使用  dispatch 调用
      getTestData(context,data){
        // console.log(context); 
        console.log(data);
        apis.getTest().then((res)=>{
          context.state.goodsList=res.data.data;
          console.log( context.state.goodsList);
        })
      },
  }


})
