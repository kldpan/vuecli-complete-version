<template>
  <div>
    <h1>list</h1>
        <router-link to="/list/one">one</router-link>
      <router-view />
      <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$route)
    console.log("run_list")
  },
  methods:{
    test(){
      // this.$eventBus.$emit("testEvent",{uname:"Msea"})
      // this.$router
      this.$router.back();
    }
  },
  // 路由进入
  beforeRouteEnter(to, from, next) {
    /*
    if(from.path=="/test"){
      next({path:"/index"});
    }else{
      next();
    }
    */
     next();
  },
  //路由离开
  beforeRouteLeave(to, from, next) {
    next();
  },
  //控制子路由
  beforeRouteUpdate(to, from, next) {
    next();
    console.log("beforeRouterUpdate");
  }
};
</script>
