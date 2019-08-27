<template>
    <div >
        <div class="showitem"  v-for="item of select" :key="item.data.default_goods_id">  
            <div class="left">
                <img :src="item.data.goods_info[0].img_url" alt="">
            </div>  
            <div class="right">
                <p>{{item.data.seo.title}}</p>
                <span v-html="item.data.seo.description"></span>
                <i>￥{{item.data.goods_info[0].price}}起</i>
            </div>  
         </div>
    </div>
</template>
<script>
export default {
    props:["select"]
}
</script>
<style lang="scss" scoped>
   .showitem{
       width:100%;
       display: flex;
       border-bottom: 1px solid #ccc;
       .left{
           width: 1.31rem;
           height:1.31rem;
           img{
               width:100%;
               height:100%;
           }
       }
       .right{
           display: flex;
           flex-direction: column;
        //    justify-content: center;
           width: 2.13rem;
           padding-top:.15rem;
           p{
               font-size: .16rem;
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
           }
           span{
               font-size: .12rem;
               overflow: hidden;
               margin-bottom: .14rem;
               display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                color:#ccc;
           }
           i{
               font-size: .18rem;
               color: #ff6700;
           }
       }
   }
</style>

