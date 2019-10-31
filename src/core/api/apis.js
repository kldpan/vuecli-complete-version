import request from "./http"  // request({})
import params from "./params"

var poxy="/apis"
var url1="/index"
var url2="/user/topic"



class Apis {
    getTest(){
       return request({
            method:"GET",
            url:poxy+"/api/v1/topics",
            headers:{
                token:params.token
            }
        })
    }
    getTopic(){
        return request({
            method:"GET",
            url:poxy+"/api/v1/topic/5433d5e4e737cbe96dcef312"
        })
    }
}

export default new Apis();  //{getTest:function(){}}