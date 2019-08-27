<template>
  <div class="login">
    <div class="title">
      <div><span>小米账户注册</span></div>
    </div>
    <div class="zcform" >
      <input type="text" @blur="name" v-model="usera.name" placeholder="请输入用户名">
      <input type="password" @blur="pass" v-model="usera.pass" placeholder="请输入密码">
      <input type="password" @blur="repass" v-model="repassword" placeholder="再次确认密码">
    </div>
    <div class="alert">
      <Alert v-show="isshow" :type="type"  show-icon>{{msg}}</Alert>
    </div>
    <i-button class="loginbtn" type="warning" @click="zc(usera)">立即注册</i-button >
    <i>已阅读小米政策，我志愿加入雷总的队伍，I am OK</i>
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
        i{
          font-size: .12rem;
          color:#999999;
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
        type:"success",
        chenge:false,
        names:false,
        passs:false,
        repasss:false
      }
    },
    methods:{
      //监测用户名不能为空方法
      name(){
          if(this.usera.name == "" && this.isshow == false){
              this.isshow = true;
              this.msg="用户名不能为空"
              this.type="error" 
          }else{
              this.isshow = false;
              this.names = true
          }
      },
      pass(){
          if(this.usera.pass == "" && this.isshow == false){
              this.isshow = true;
              this.msg="密码不能为空"
              this.type="error" 
          }else{
              this.isshow = false;
              this.passs = true
          }
      },
      repass(){
          if(this.repassword == "" && this.isshow == false){
              this.isshow = true;
              this.msg="确认密码不能为空"
              this.type="error" 
          }else{
            if(this.repassword != this.usera.pass){
                this.isshow = true;
                this.msg="两次密码不一致请确认"
                this.type="error" 
            }else{
               this.isshow = false;
               this.repasss = true
            } 
          }
      },
      //注册方法
      zc(val){
          
          if(this.repasss && this.passs && this.name){
                let users = JSON.parse(localStorage.getItem('users')?localStorage.getItem('users'):'[]')
                if(users==""){
                    users.push(val)
                }else{
                    let ishave = users.filter(item=>{
                      if(item.name == val.name){
                          this.isshow = true;
                          this.msg="该用户名已存在"
                          this.type="error"
                          return true;
                      }
                    })
                    if(ishave==""){
                        users.push(val)
                        this.isshow = true;
                        this.msg="恭喜您，注册成功,3秒后返回登录界面"
                        this.type="success"
                        this.usera={}
                        this.repassword=''
                        setTimeout(()=>{
                            this.$router.push("/login")
                        },3000)
                    }
                }
                localStorage.users = JSON.stringify(users)
          }
          else if(this.isshow == false){
              this.isshow = true;
              this.msg="以上信息不能为空"
              this.type="error"
          }
      },
    }
}
</script>
