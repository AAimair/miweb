<template>
    <div id="tabbar">
        <div class="box">
            <router-link tag="div"
            :to="{name:tabbar.type}"
            v-for="tabbar in tabbars" 
            :key="tabbar.id" :class="(tabbar.type == 'tj' && zistab)?'ischenge':''" >
                <i class="iconfont" v-html="tabbar.i"></i>
                <span>{{tabbar.title}}</span>
            </router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #tabbar{
        position:fixed;
        width: 3.75rem;
        bottom:0;
        height:9%;
        top:91%;
        background: white;
        z-index: 1;
        box-shadow: 2px -1px 2px #ccc;
        .box{
            width: 3.75rem;
            position: fixed;
            display: flex;
            bottom:0;
            height:9%;
            align-items: center;
            color:#999999;
            .router-link-active{
                color:rgb(255, 103, 0);
            }
            .ischenge{
                color:rgb(255, 103, 0);
            }
            div{
                width: 25%;
                height:8%;
                justify-content:center;
                align-items: center;
                flex-direction: column;
                display: flex;
                .iconfont{
                    font-size: 0.20rem;
                    // color: #ccc;
                }
                span{
                text-align: center;
                font-size: 0.14rem;
            }
            }
            
        }
    }
</style>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            tabbars:[
                {id:1,title:"首页",type:"tj",isceck:true,i:"&#xe60a;"},
                {id:2,title:"分类",type:"group",isceck:false,i:"&#xe716;"},
                {id:3,title:"购物车",type:"car",isceck:false,i:"&#xe505;"},
                {id:4,title:"我的",type:"mine",isceck:false,i:"&#xe621;"}
            ],
            type:"tj",
        }
    },
    methods: {
       
    },
    created() {
        // console.log(this.$route)
        // this.ischenge=this.istab
    },
    computed: {
         ...mapState({
            zistab:state=>state.headertype.istab  
        })
    },
}
</script>