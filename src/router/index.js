import Vue from "vue";
import VueRouter from "vue-router";
import params from "@/core/api/params";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/components/index.vue"),
        meta: {
          title: "首页",
          uname:"Msea",
        }
      },
      {
        path: "list",
        name:"list",
        component: () => import("@/components/list.vue"),
        meta: {
          title: "列表页",
        }
      },
      //动态路由
      {
        path: "list/:num",
        name:"list",
        component: () => import("@/components/two.vue"),
        meta: {
          title: "列表页",
        }
      },
      {
        path: "login",
        name:"login",
        component: () => import("@/components/login.vue"),
        meta: {
          title: "登陆页"
        }
      },
      {
        path: "testv",
        name:"testv",
        component: () => import("@/components/testv.vue"),
        meta: {
          title: "Vuex测试"
        }
      }
    ]
  }
  // {
  //   path: "/user",  
  //   name: "user",
  //   component: () => import("@/views/user.vue"),
  //   children: [
  //     { path: "index", component: () => import("@/components/login.vue") }// /user/logn
  //   ]
  // },
  // {
  //   path: "/admin",  
  //   name: "admin",
  //   component: () => import("@/views/admin.vue"),
  //   children: [
  //     { path: "index", component: () => import("@/components/login.vue") }// /admin/logn
  //   ]
  // }
];
const router = new VueRouter({
  // mode:"history",
  routes
});
//全局的路由钩子函数
router.beforeEach((to, from, next) => {
  // console.log(params.userType)
  //from  从哪来
  //to    到哪去
  //next(); 是否到下一个路由
  // console.log(to.path);
  // if(to.path=="/"){
  //   next({path:"/index"})
  // }else{
  //   next();
  // }
  if (to.path == "/") {
    if (params.userType === "index") {
      next({
        path: "/index"
      });
    } else if (params.userType === "list") {
      next({
        path: "/list"
      });
    } else if (params.userType === "test") {
      next({
        path: "/test"
      });
    }else{
      next();
    }
  }else{
    next();
  } 
});

router.afterEach((to, from) => {
  // console.log("路由跳转完毕")
});

export default router;
