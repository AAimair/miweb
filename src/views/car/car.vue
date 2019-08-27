<template>
  <div class="car">
    <headers></headers>
    <div class="title" v-if="data.sum==0 && !username ">
      <span>登录后享受更多优惠</span> 
      <i @click=" login()">去登陆></i>
    </div>
    <cars></cars>
    <div class="cars" v-if="data.sum==0">
      <img src="https://m.mi.com/static/img/cartnull.daaf7926f8.png" alt="">
      <i>购物车还是空的</i>
      <span>去转转</span>
    </div>
    <img class="like" src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
    <div class="iemsBox">
      <items :paths="paths"></items>
    </div>
    <div :class="data.sum!=0?'havecar':'issl'">
      <div class="left">
        <aside>共{{data.sum}}件 金额:</aside>
        <div><p>{{data.price}}</p><span>元</span></div>
      </div>
      <div class="center">继续购物</div>
      <div class="right">去结算</div>
    </div>
    <tabbar></tabbar>  
  </div>
</template>

<script>
// @ is an alias to /src
import cars from './cars'
import tabbar from '../../components/tabbar/tabbar'
import headers from "../../components/header/header"
import items from "../../components/item/item"
import {mapState} from "vuex"
export default {
  name:"car",
    components:{
      tabbar,
      headers,
      items,
      cars,
      username:""
    },
    methods: {
       login(){
            this.$router.push("/login")
        }
    },
    data() {
      return {
         lists:[]
      }
    },
     created() {
        this.$http.get('/data/carlist.json').then(res=>{
           this.lists = res.data[0].data.recom_list
        })
        this.$store.dispatch("getcar")
        this.username = sessionStorage.username;
    },
    computed: {
      ...mapState({
        data:state=>{
              let sum = 0;
              let price = 0 ;
              state.cars.cars.forEach(item => {
                  sum+=item.num
                  price += item.num * item.price
                  // price = Number(price)
                  
              });
              price = price.toFixed(2)
              return {'sum':sum,'price':price};
           }
      }),
      ...mapState({
        paths:state=>{
             return  state.headertype.path;
           }
      }),
    },
}
</script>
<style lang="scss" scoped>
.car{
  padding-top:.5rem;
  padding-bottom:.6rem;
  .title{
    padding: 0 .1rem;
    display: flex;
    justify-content: space-between;
    height:0.54rem;
    line-height: .54rem;
    i{
      font-size: .12rem;
      color:#999999;
    }
  }
  .cars{
    display: flex;
    justify-content: center;
    height:.62rem;
    background: #ebebeb;
    align-items: center;

    img{
      width:.4rem;
      height:.4rem;
      text-align: center;
      margin-right: .1rem;
    }
    i{
      height: .14rem;
      font-size: .14rem;
      color: #999999;
    }
    span{
      display: inline-block;
      height: .26rem;
      line-height: .26rem;
      font-size: .13rem;
      width: .64rem;
      border: 1px solid #ccc;
      margin-left:.1rem;
      margin-top:.05rem;
      text-align: center;
    }
  }
  .like{
    height: .62rem;
    width: 100%;
    margin-bottom:.08rem;
  }
  .havecar{
    display: flex;
    height:9%;
    width: 100%;
    background: yellow;
    position: fixed;
    flex-direction: row;
    bottom:0;
    left:0;
    z-index: 200;
     transition: 2s;
    div{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left{
      background: #fff;
      flex-direction: column;
      justify-content: center;
      div{
        height:.24rem;
        margin-bottom:10px;
        p{
          font-size: 20px;
          color:#ff6700;
          font-weight: bolder;
        }
        span{
          font-size: .14rem;
        }
      }
     aside{
       display: block;
        font-size: .14rem;
        margin-top:6px;
      }
    }
    .center{
      background: #f4f4f4;
      color: #333;
    }
    .right{
        background: #ff6700;
        color: #fff;
      }
  }
  .issl{
    display: flex;
    height:9%;
    width: 100%;
    background: yellow;
    position: fixed;
    flex-direction: row;
    bottom:-9%;
    left:0;
    z-index: 200;
    transition: 2s;
    overflow: hidden;
    div{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left{
      background: #fff;
      flex-direction: column;
      justify-content: center;
      div{
        height:.24rem;
        margin-bottom:10px;
        p{
          font-size: 20px;
          color:#ff6700;
          font-weight: bolder;
        }
        span{
          font-size: .14rem;
        }
      }
     aside{
       display: block;
        font-size: .14rem;
        margin-top:6px;
      }
    }
    .center{
      background: #f4f4f4;
      color: #333;
    }
    .right{
        background: #ff6700;
        color: #fff;
      }
  }
}
  
</style>

