<template>
    <div class="navr">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="img of imgs" :key="img.id">
                    <img class="imgs" width="100%" height="100%" :src="img.img" alt="">
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
    mounted() {
        var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    data() {
        return {
            img:[],
            type:""
        }
    },
   created(){
        this.type = this.$route.name
        switch (this.type) {
            case "tj":
                this.imgs = [
                    {id:1,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5bd78737bc01dd2e1d21c427c99fb52.jpg?thumb=1&w=720&h=360"},
                    {id:2,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e0a5605134ac9d3d2ea13732d79f10b.jpg?thumb=1&w=720&h=360"},
                    {id:3,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8aa288186940aa7ca71e25058d0edf49.jpg?thumb=1&w=720&h=360"},
                ];
                break;
            case "sj":
                this.imgs = [
                    {id:1,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c352beae76d56e4a98c48c8782a497b2.jpg?thumb=1&w=720&h=360"},
                    {id:2,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e12b86fcbe05398b47e46b5bd88a2ca8.jpg?thumb=1&w=720&h=360"},
                    {id:3,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5bd78737bc01dd2e1d21c427c99fb52.jpg?thumb=1&w=720&h=360"},
                ];
                break;
            case "zn":
                this.imgs = [
                    {id:1,img:"https://i8.mifile.cn/v1/a1/fe08cdfd-5a9c-0c44-ac75-924ea7494207.webp"},
                    {id:2,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/873c0a68868b0231469e2d8c51255385.jpg?thumb=1&w=720&h=360"},
                    {id:3,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/be4fedc86b69abe4c7e61336dff7f598.jpg?thumb=1&w=720&h=360"},
                ];
                break;
            case "ds":
                this.imgs = [
                    {id:1,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8aa288186940aa7ca71e25058d0edf49.jpg?thumb=1&w=720&h=360"},
                ];
                break;
            case "bjb":
                this.imgs = [
                ];
                break;
            case "zn":
                this.imgs = [
                    {id:1,img:""},
                    {id:2,img:""},
                    {id:3,img:""},
                ];
                break;
            case "jd":
                this.imgs = [
                    {id:1,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/276ec76de8d1f66efe5872ce15caa60b.jpg?thumb=1&w=720&h=360"},
                    {id:2,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5dae39b2f5b4e050d1675e6839fa6c6.jpg?thumb=1&w=720&h=360"},
                    {id:3,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc11f36efc0c36e3399b10356447e914.jpg?thumb=1&w=720&h=360"},
                ];
                break;
            case "shzb":
                this.imgs = [
                    {id:1,img:"https://i8.mifile.cn/v1/a1/a327b9f5-b06c-4568-7974-42282e7a9131.webp"},
                    {id:2,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/99268d31d01c0caf3c7a4eed880571d5.jpg?thumb=1&w=720&h=360"},
                    {id:3,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74017c12d09ca8c6e4447ed48050591d.jpg?thumb=1&w=720&h=360"},
                ];
                break;
            default:
                break;
        }
    },
}
</script>
