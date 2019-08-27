<template>
    <div class="item">
        <router-link tag="aside" v-for="list of lists" :key="list.action.path" :to="{name:'items',params:{id:list.action.default_goods_id}}" >
            <img :src="list.image_url" alt="">
            <p>{{list.name}}</p>
            <i :v-html="list.product_desc"></i>
            <div class="price">
                <span>￥</span><span>{{list.price}}</span><span>起</span><i>￥</i><i>{{list.market_price}}</i>
            </div>
            <i-button type="primary" v-if="!paths">购买</i-button>
        </router-link >
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
     props:["paths"],
    data() {
        return {
            lists:[]
        }
    },
    methods: {
        
    },
    computed: {
    },
    // props:['list'],
    created() {
        this.$http.get('/data/carlist.json').then(res=>{
           this.lists = res.data[0].data.recom_list
        })
    },
}
</script>
<style lang="scss" scoped>
.item{
    display: flex;
    flex-wrap: wrap;
    aside{
        background: 0 0;
        text-decoration: none;
        outline: 0;
        cursor: pointer;
        width: 1.78rem;
        margin-left:0.06rem;
        margin-bottom: 0.1rem;
        text-align: center;
        box-shadow: 2px 2px 3px #ccc;
        padding-bottom: 0.1rem;
        img{
            width: 100%;
        }
        p{
            margin-top: .06rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.14rem;
            color: black;
            text-align: center;
            padding:0 .1rem;
        }
        i{
            // margin-top: .06rem;
            font-size: .12rem;
            line-height: .12rem;
            color: rgba(0,0,0,.54);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            display: block;
            width: 100%;
            text-decoration:line-through;
        }
        .price{
                font-size: .16rem;
                color: #ea625b;
                // height: 0.18em;
                // line-height: 0.18em;
                text-align: center;
            span{
                font-size: .16rem;
                color:#ea625b;
            }
            i{
                display: inline-block;
                width: auto;
                text-align: center;
                
            }
        }
        button{
            // display: ;
            width: 1rem;
            height:0.3rem;
            background: #ea625b;
            border: 0;
        }
    }
}
    
       
</style>
