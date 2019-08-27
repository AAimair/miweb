<template>
    <div class="navr">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" >
                </div>
                 <div class="swiper-slide" >
                  <!-- <a href="">什么</a> -->
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import Swiper from "swiper"
export default {
    components:{
        
    },
    mounted() {
        var text = "women"
        var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            direction : 'vertical',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            virtual: {
                slides: ['手机', '电视', '电脑'],
            },
            renderSlide:function(slide, index){
                return '<div class="swiper-slide">索引是'+index+'+内容是'+slide+'</div>';
            },
            })
        },
    data() {
        return {
            img:[],
            type:""
        }
    },

}
</script>
