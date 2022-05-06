<template>
  <!-- <div class="login-box"> -->
    <!--login-->
    <div class="login-container" :class="{'active':isActive}">
     <div class="left-container">
       <div class="title">
         <span>登录</span>
       </div>
       <div class="input-container">
         <input type="text" name='username' placeholder="用户名">
         <span class="spin"></span>  
         <input type="password" name="password" placeholder="密码">
         <span class="spin"></span>
       </div>
       <div class="message-container">忘记密码</div>
     </div>
     <div class="right-container">
       <div class="regist-container" @click="changeInterface">
         <span class='regist'>注册</span>
       </div>
       <div class="action-container" @click='handlerLogin'>
         <span>登录</span>
       </div>
     </div>
   </div>
   <!--register-->
    <div class="login-container" :class="{'active':!isActive}">
     <div class="left-container">
       <div class="title">
         <span>注册</span>
       </div>
       <div class="input-container">
         <input type="text" name='username' placeholder="用户名">
         <span class="spin"></span>  
         <input type="password" name="password" placeholder="密码">
         <span class="spin"></span>
       </div>
       <!-- <div class="message-container">忘记密码</div> -->
     </div>
     <div class="right-container">
       <div class="regist-container" @click="changeInterface">
         <span class='regist'>登录</span>
       </div>
       <div class="action-container" >
         <span>注册</span>
       </div>
     </div>
   </div>
  <!-- </div> -->
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import axios from 'axios'
  let isActive=ref<Boolean>(true)
  const changeInterface= ():void=>{
    isActive.value=!isActive.value
  }
  const handlerLogin=():void=>{
    axios.get('/api/login')
    .then((res)=>{
      console.log(res,'res')
    })
  }
</script>
<style lang="scss">
    body{
      background-image:linear-gradient(to bottom right,rgb(114,135,254),rgb(130,88,186)) ;
    }
    // .login-box{
    //   width: 100%;
    //   height: 100%;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // }
    .login-container{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 600px;
      height: 279px;
      // margin:0 auto;
      // margin-top: 20%;
      box-shadow: 0 10px 50px 0 rgba(59, 45, 159 );
      border-radius: 15px;
      background-color: rgb(95, 76, 194);
      opacity: 0;
      transition: opacity 1.5s ease-in-out;
    }
    .login-container.active{
      z-index: 1;
      opacity: 1;
      transition: opacity 1.5s ease-in-out;
    }
    .login-container .left-container{
       display: inline-block;
       border-top-left-radius: 15px;
       border-bottom-left-radius: 15px;
       width: 330px;
       padding: 60px;
       height: calc(100% - 120px);
       background-image: linear-gradient(to bottom right,rgb(118,76,163),rgb(92,103,211));
     }
    .login-container .left-container .title{
       color:#fff;
       font-size: 18px;
       font-weight: 200;
     }
    .login-container .left-container .title span{
      border-bottom: 3px solid rgb(237, 221, 22);
     } 
    .login-container .left-container .input-container{
      padding: 20px 0;
     }
    .login-container .left-container .input-container input{
      border: 0;
      outline: 0;
      background: none;
      margin: 8px 0;
      color: #ffffff;
      border-bottom: 1px solid rgb(199, 191, 219);
      display: block;
      width: 100%;
      padding: 5px 0;
     }
    .login-container .left-container .input-container input:hover{
      border-bottom-color:orange ;
      /* animation: move 4s linear; */
      transition: 2s; 
     }
     /* @keyframes move {
       0%{
         width: 0%;
       }
       100%{
         width: 100%;
       }
     } */
     ::-webkit-input-placeholder{
       color: rgb(199, 191, 219);
       transition: all 0.2s ease;
     }
    .login-container .left-container .message-container{
      font-size: 14px;
      transition: .2s;
      color:rgb(199, 191,219);
      cursor: pointer;
     }
    .login-container .left-container .message-container:hover{
       color: #ffffff;
     }
    .login-container .right-container{
      display: inline-block;
      width: 145px; 
      height: calc(100% - 120px);
      vertical-align: top;
      padding: 60px 0;
    }
    .login-container .right-container .regist-container{
      text-align: center;
      color: #ffffff;
      font-size: 18px;
      font-weight: 200;
    }
    .login-container .right-container .regist-container span{
      border-bottom: 3px solid rgb(237, 221, 22);
      border-bottom-width: 2px;
      cursor: pointer;
    }
    .login-container .right-container .regist-container span:hover{
      /* border-bottom: 3px solid rgb(237, 221, 22); */
    display: inline-block;
    width: 60%;
    border-bottom-width: 0;
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
      cursor: pointer;
    }
    .login-container .right-container .action-container{
      font-size: 10px;
      color: #ffffff;
      position: relative;
      height: 100%;
      text-align: center;
    }
    .login-container .right-container .action-container span{
      border: 1px solid rgb(237, 221, 22);
      padding: 10px;
      display: inline;
      line-height: 25px;
      border-radius: 25px; 
      position: absolute;
      bottom: 10px;
      left: calc(72px - 25px);
      transition: .2s;
      cursor: pointer;
    }
    .login-container .right-container .action-container span:hover{
      background-color: rgb(237, 221, 22);
      color:rgb(95, 76, 19%)
    }
</style> 