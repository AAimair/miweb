<template>
  <div class="group">
    <headers></headers>
    <div>
      <div class="left">
        <ul>
          <Anchor :offset-top="atop" :affix="false">
            <AnchorLink class="al" :mark="list._id" v-for="list of lists" :key="list._id" :href="'#'+list._id" :title="list.category_name" />
          </Anchor>
        </ul>
      </div>
      <div class="right">
        <div class="item" v-for="list of lists" :key="list._id" :id="list._id" >
          <div class="title"><span>{{list.category_name}}</span></div>
          <div class="centent">
            <div v-for="data of list.body" :key="data.id">
              <img :src="data.img_url" alt="">
              <span>{{data.product_name}}</span>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    <tabbar></tabbar>  
  </div>
</template>

<script>
import tabbar from '../../components/tabbar/tabbar'
import headers from "../../components/header/header"
import {AnchorLink,Anchor} from 'iview'
export default {
    name:"group",
    components:{
      tabbar,
      headers,
      AnchorLink,
      Anchor
    },
    created() {
      this.$http.get("/data/group.json").then(res=>{
        this.groups=res.data.data
      })
      this.$http.get("/api/sk/home/list4").then(res=>{
        this.lists = res.data.data.object_list
        // console.log(this.lists)
      })
    },
    data() {
      return {
        atop:50,
        lists:[],
        flag:false
      }
    },
    methods: {
      chenge(){
        
      }
    },
}
</script>
<style lang="scss" scoped>
    .group{
      padding-top:0.5rem;
      padding-bottom:.6rem;
      .left{
        width: 26%;
        background: pink;
        position: fixed;
        top:0.5rem;
        background: #fefefe;
        ul{
          // height:900px;
          display: flex;
          flex-direction: column;
            li{
          display: flex;
          align-items: center;
          height: 0.46rem;
          line-height: 0.46rem;
        }
        a{
              display: block;
            // display: flex;
            align-items: center;
            height: 0.46rem;
            line-height: 0.46rem;
            color: #999999;
            text-align: center;
        }
        .ivu-anchor-link-active{
          color: #ff6700;
        }
        }
      
      }
        .right{
        margin-left:26%;
        width: 74%;
         display: flex;
         flex-direction: column;
        position: relative;
        position: relative;overflow-y: scroll;
        .item{
          // margin-bottom:.6rem;
          // height:600px;
          overflow: hidden;
            .title{
              height:.3rem;
              width: 100%;
              height:0.6rem;
              text-align: center;
              line-height: .6rem;
              span{
                position: relative;
                 &::before{
                    content: "";
                    width:.3rem;
                    border-top:1px #ccc solid;
                    position: absolute;
                    top:50%;
                    left:-0.46rem;
                  }
                  &::after{
                    content: "";
                    width:.3rem;
                    border-top:1px #ccc solid;
                    position: absolute;
                    top:50%;
                    right:-0.46rem;
                  }
              }
             
            }
            .centent{
              width:100%;
              display: flex;
              flex-wrap: wrap;
              div{
                width:33%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom:.3rem;
                img{
                  width:.5rem;
                  height:.5rem;
                }
                span{
                  font-size: .12rem;
                }
              }
             
            }
        }
        }
    }
</style>

