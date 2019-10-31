<template>
  <div>
    <h1>index</h1>
    <div class="box"></div>
    <ul>
      <li v-for="(item,index) in dataList" :key="index">
        <p>{{item.title}}</p>
      </li>
    </ul>
    <i class="fa fa-automobile fa-lg"></i> 
    <button @click="toPath">toList</button>
    <mt-button type="default">default</mt-button>
  </div>
</template>

<script>
import axios from "axios";
import { Indicator } from 'mint-ui';
export default {
  data() {
    return {
      dataList: [],
      msg:"Msea007"
    };
  },
  methods:{
    toPath(){
      // <router-link to="">toPath</router-link>
      this.$router.push("/list/1901")
      // this.$router.push(`/list?name=${this.msg}`);
      // this.$router.push({path:"/list",query:{name:"Msea"}})
      // this.$router.push({name:"/list",params:{name:"Msea"}})
    }
  },
  mounted() {
    console.log("run_index");
    Indicator.open('加载中...');

    setTimeout(()=>{
      Indicator.close();
    },5000)
    /*   

    this.$apis.getTest({name:"13456789"}).then((res)=>{

    })


  axios.all([this.$apis.getTest(),this.$apis.getTopic()])
    .then(axios.spread(function (acct, perms) {
      // 两个请求现在都执行完成,返回
      console.log(acct,perms)
    }));
    
   
  
  */
//  axios 基于promis promisApi 他都支持
    // Promise
    // Promise.all([this.$apis.getTest(),this.$apis.getTopic()]).then((res)=>{
    //   console.log(res);
    // })
  }
};
</script>

<style lang="scss" scoped>
.btn {
  background: $baseColor;
}
.box {
  width: r(51);
  height: r(51);
  background: $baseColor;
  @include setRem(padding, 20, 20, 20, 20);
}
</style>
