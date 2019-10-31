<template>
  <div>
    <h1>Login</h1>
    <button @click="test('One')">One</button>
    <button @click="test('Two')">Two</button>
    <button @click="test('Three')">Three</button>
      <keep-alive>
          <component :is="isStr"></component>
      </keep-alive>

     <!-- <login-test>
       <div>小飞侠</div>
     </login-test> -->

     <swiper :config="{id:'loginsi',info:{}}"> 
       <div class="swiper-slide">Slide 1</div> 
       <div class="swiper-slide">Slide 2</div> 
       <div class="swiper-slide">Slide 3</div> 
     </swiper>

        <swiper :config="{id:'loginsis',info:{slidesPerView :3}}"> 
       <div class="swiper-slide">Slide 1</div> 
       <div class="swiper-slide">Slide 2</div> 
       <div class="swiper-slide">Slide 3</div> 
     </swiper>

     <One @click.native="show(1)"/>
     <One @click.native="show(2)"/>
     <One @click.native="show(3)"/>
  
  </div>
</template>

<script>
import One from "@/components/one.vue";
import Two from "@/components/two.vue";
import Three from "@/components/three.vue";
// import loginTest from "@/components/test.vue";
import Swiper from "@/components/test.vue";

export default {
  data(){
    return {
      isStr:"One"
    }
  },
  methods:{
    test(str){
      this.isStr=str;
    },
    show(num){
      alert(num);
    }
  },
  components: {
    One,
    Two,
    Three,
   Swiper
  }
};
</script>
