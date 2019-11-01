<template>
  <div class="home">
    <div>
      <div v-show="true">login</div>
      <span v-for="(item,index)  in pathList" :key="index">
        <button @click="toPath(item)">{{item.pathname}}</button>
      </span>
    </div>
    <!-- 切换路由组件 -->
     <keep-alive>
          <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title" img-set="/img/favicon.ico" />
    </keep-alive>  
          <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title" img-set="/img/favicon.ico" />
    <div>{{testRoute}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pathList: [
        { pathname: "index", path: "/index" },
        { pathname: "list", path: "/list" },
        { pathname: "login", path: "/login" },
        { pathname: "testv", path: "/testv" },
      ]
    };
  },
  mounted() {
    // this.$eventBus.$on("testEvent", res => {
    //   console.log(res);
    // });
    // console.log(this.$route);
    this.$store.dispatch("getTestData");
  },
  computed: {
    testRoute() {
      return this.$route.meta;
    }
  },
  methods: {
    toPath(item) {
      this.$router.push(item.path);
    }
  }
};
</script>
