import directive from "./directive.js"
import Apis from "@/core/api/apis.js"

import { Button } from 'mint-ui';


export default (Vue)=>{
    // console.dir(Vue)  //directive  filter
    directive(Vue);
    Vue.prototype.$eventBus=new Vue();  //$on $emit  {$on:fn(),$emit:fn}
    Vue.prototype.$apis=Apis;       //Apis->   {fn(){}};
    // Vue.prototype.uname="Msea____";        测试  this.uname
    Vue.component(Button.name, Button);
}