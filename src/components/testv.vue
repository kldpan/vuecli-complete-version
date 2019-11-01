<template>
  <div>
    <h1>Vuex测试</h1>
    <div>
      <h1>名称:{{$store.state.name}}</h1>
      <p>价格:{{$store.state.price}}</p>
      <!-- <p>总价:{{$store.state.price*$store.state.num}}</p> -->
      <p>总价:{{$store.getters.count}}</p>
      <p>数量:{{$store.state.num}}</p>
      <button @click="$store.commit('add')">add</button>
      <button @click="add">test</button>
      <ul>
        <!-- <li v-for="(item,index) in $store.state.goodsList" :key="index"> -->
        <li v-for="(item,index) in goodList" :key="index">
           <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    add(){
      // this.$store.commit('add',{uname:"Msea"})
      // console.log(this.$store)
      this.$store.dispatch("getTestData",{uname:"xxxxx"})
    }
  },
  computed:{
    goodList(){
      return this.$store.state.goodsList;
    }
  }
};
</script>
