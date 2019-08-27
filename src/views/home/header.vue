<template>
    <div id="home_header">
        <div class="top">
            <img src="../../assets/logo.png" alt="">
            <span><i class="iconfont">&#xe607;</i><input @focus="select()" type="search" placeholder="搜索商品名称"></span>
            <i class="iconfont" id="tx">&#xe621;</i>
        </div>
        <div class="bottom">
            <ul v-if="isunfold">
                <li>全部</li>
            </ul>
            <ul v-else>
                <router-link tag="li" :to="{'name':tab.type}" v-for="tab in tabs"  :key="tab.id" :class="tab.type==isli?'router-link':''">{{tab.name}}</router-link>
            </ul>
            <div @click="showgroup">
                <i v-if="isunfold" class="iconfont">&#xe62d;</i>
                <i v-else class="iconfont">&#xe62e;</i>
            </div>
        </div>
        <div :class="isunfold?'isshowxl':'disbottom'">
            <div class="bottom" @click="isunfold=false">
                <router-link tag="aside" :to="{'name':tab.type}"  v-for="(tab) in tabs" :key="tab.id">{{tab.name}}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    data() {
        return {
            tabs:[
                {id:1,name:"推荐",type:"tj"},
                {id:2,name:"手机",type:"sj"},
                {id:4,name:"智能",type:"zn"},
                {id:5,name:"电视",type:"ds"},
                {id:6,name:"笔记本",type:"bjb"},
                {id:7,name:"家电",type:"jd"},
                {id:8,name:"生活周边",type:"shzb"}

            ],
            sx:"&#xe638;",
            isunfold:false,
            isli:"tj",
            oldtype:this.old,
            newstype:this.news,
        }
    },
    methods: {
        showgroup(){
            this.isunfold = !this.isunfold
        },
         select(){
             this.$router.push('/select');
         }
    },
   
}
</script>
<style lang="scss" >
    #home_header{
        position: fixed;
        top:0;
        left:0;
        width: 3.75rem;
        height:0.74rem;
        background: rgb(242, 242, 242);
        box-shadow: 2px 2px 2px #ccc;
        z-index: 100;
        .iconfont{
            font-size: 0.16rem;
        }
        // overflow-y: hidden;
        overflow-y: visible;
        .top{
            display: flex;
            padding:0.06rem 0.12rem 0; 
            justify-content:space-between;
            align-items: center;
            background: #f2f2f2;
            img{
                width:0.3rem;
                height: 0.2rem;
            }
            span{
                position:relative;
                input{
                    width:2.8rem;
                    height: 0.3rem;
                    border: 0;
                    text-indent: 0.3rem;
                    font-size: 0.14rem;
                    color: #ccc;
                }
                .iconfont{
                   position:absolute;
                    text-align: center;
                    top:0.04rem;
                    left:0.08rem;
                    font-weight: 300; 
                }
                #tx{
                    position:absolute;
                    text-align: center;
                    font-size: 28px;
                    font-family:"iconfont" !important;
                }
            }
        }
        .bottom{
            font-size: 0.14rem;
            display: flex;
            height: 0.4rem;
            width: 100%;
            background: #f2f2f2;
            ul{
                width: 92%;
                display: flex;
                align-items: center;
                overflow-x:auto;
                overflow-y:hidden;
                justify-content: space-between;
                &::-webkit-scrollbar {
                    display: none;
                    width: 0 !important;
                    -ms-overflow-style: none;
                    overflow: -moz-scrollbars-none;
                }
                li{
                    display: inline-block;
                    padding:0 0.14rem;
                    height: 0.4rem;
                    text-align: center;
                    line-height:0.4rem;
                    flex:0 0 auto;
                    &:last-of-type{
                        text-align: left;
                    }
                    &::after{
                        display: block;
                        content: " ";
                        overflow: hidden;
                        width: 100%;
                        height: 0.03rem;
                        margin-top:-0.05rem;
                        border-radius: 0.01rem;
                    }
                } 
                .router-link-active{
                    color: rgb(237, 91, 0);
                    &:after{
                        background: rgb(237, 91, 0);
                    }
                }
            }
            div{
                text-align: center;
                flex:1;
                .iconfont{
                    height: 0.4rem;
                    line-height: 0.4rem;
                    text-align: center;
                    
                    font-size: 0.14rem;
                    color: #333333;
                    margin-top:0;
                    margin-right:0;
                }
            }
           
        }
        .disbottom{
            border: 0;
            flex-direction: column;
            overflow: hidden;
            font-size: 0.14rem;
            display: flex;
            height: 1.2rem;
            width: 100%;
            position: fixed;
            background: rgb(242, 242, 242);
            z-index: -30;
            top:-0.45rem;
            left:0;
            transition: 1s;
            .bottom{
                    display:flex;
                    margin-top:.2rem;
                    flex-wrap: wrap;
                    padding:0 0 0 0.1rem;
                    aside{
                        // flex: 1;
                        width:0.8rem;
                        height:0.3rem;
                        display:inline-block;
                        text-align: center;
                        // flex:0 0 auto;
                        line-height: 0.3rem;
                        background: white;
                        margin-bottom:0.16rem;
                        border-radius: 4px;
                         margin-right:0.11rem;
                    } 
                      .router-link-active{
                        border: 1px solid rgb(237, 91, 0);
                        background: #fde0d5;
                        color: rgb(237, 91, 0);
                    }
            }  
        }
        .isshowxl{
            overflow: hidden;
            font-size: 0.14rem;
            display: flex;
            height: 1.2rem;
            width: 100%;
            position: fixed;
            z-index: -30;
            top:0.74rem;
            left:0;
            background: rgb(242, 242, 242);
            transition: 1s;
            flex-direction: column;
            .bottom{
                    display:flex;
                    // justify-content:space-between;
                    flex-wrap: wrap;
                    padding:0 0 0 0.1rem;
                    margin-top:.2rem;
                    aside{
                        width:0.8rem;
                        height:0.3rem;
                        display:inline-block;
                        text-align: center;
                        line-height: 0.3rem;
                        background: white;
                        margin-bottom:0.16rem;
                        border-radius: 4px;
                        margin-right:0.11rem;
                    } 
                      .router-link-active{
                        border: 1px solid rgb(237, 91, 0);
                        background: #fde0d5;
                        color: rgb(237, 91, 0);
                    }
            }    
        }
    }
</style>
