<template>
    <div class="itemsnavr">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(imgg,index) of imgs" :key="index">
                    <img class="imgs" width="100%"  :src="imgg.img_url" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
    .itemsnavr{
        .swiper-container{
            height:3.96rem;
        }
    }
</style>
<script>
import Swiper from "swiper"
export default {
    props:["imgs"],
    data(){
        return{
            img:[]
        }
    },
    created() {
        // console.log(this.imgs)
    },
   updated() {
        this.img = this.imgs

            // console.log(this.imgs)
             var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: '.swiper-pagination',
            },
        })
       
    }
}
</script>
