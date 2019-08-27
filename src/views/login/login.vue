<template>
  <div class="login">
    <div class="title">
      <img src="../../../public/mi.png" alt="">
      <div><span>小米账户登录</span></div>
    </div>
    <div class="loginform" >
      <input type="text" v-model="usera.name" placeholder="账号">
      <input type="password" v-model="usera.pass" placeholder="密码">
      <i></i>
    </div>
    <div class="alert">
      <Alert v-show="isshow" :type="types"  show-icon>{{msg}}</Alert>
    </div>
    <i-button class="loginbtn" type="warning" @click="login(usera)">登录</i-button >
     <span @click="zc()">立即注册</span>
  </div>
</template>
<style lang="scss" scoped>
      .login{
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding:.3rem 0 .1rem;
            img{
              width:.48rem;
              height: .48rem;
            }
            div{
              margin-top:.15rem;
              color:black;
              font-size: .16rem;
            }
        }
        .loginform{
          display: flex;
          flex-direction: column;
          align-items: center;
          input{
            height:.52rem;
            width: 3.35rem;
            border: 0;
            outline: 0;
            border-bottom:1px #ccc solid;
          }
        }
        .zcform{
          display: flex;
          flex-direction: column;
          align-items: center;
          input{
            height:.52rem;
            width: 3.35rem;
            border: 0;
            outline: 0;
            border-bottom:1px #ccc solid;
          }
        }
        .alert{
          margin-top:.1rem;
          width: 3.35rem;
        }
        .loginbtn{
          width: 3.35rem;
          height:.44rem;
          font-size: .16rem;
          background: #ff6700;
          margin-bottom:.1rem;
          margin-top:.2rem;
        }
      }
</style>
<script>
import { MessageBox } from 'mint-ui';
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
    data(){
      return{
        user: "", //登录的用户名
        usera:{
          name:"",
          pass:""
        },
        repassword:"",
        msg:"",
        isshow:false,
        types:"success",
        chenge:false
      }
    },
    methods:{
      //跳转注册界面
      zc(){
        this.$router.push("/zc")
      },
      //登录方法
      login(val){
           let users = JSON.parse(localStorage.getItem('users')?localStorage.getItem('users'):'[]')
            if(users==""){
                users.push(val)
            }else{
                let ishave = users.filter(item=>{
                  if(item.name === val.name && item.pass === val.pass){
                      this.isshow = true;
                      this.msg="恭喜您，登录成功,3秒后进入主页"
                      this.types="success"
                      setTimeout(()=>{
                          this.$router.push("/home/tj")
                      },3000)
                      sessionStorage.setItem("username",val.name)
                      return true;
                  }
                })
                if(ishave==""){
                    this.isshow = true;
                    this.types="warning"
                    this.msg="用户名或密码错误"
                }
            }
      }
    }
}
</script>
