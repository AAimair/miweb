<template>
    <div class="groupbar">
        <img v-for="img of imgs" :key="img.id" :src="img.img" alt="">
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    data() {
        return {
            imgs:[],
            type:""
        }
    },
    created(){
        this.type = this.$route.name
        switch (this.type) {
            case "tj":
                this.imgs = [
                    {id:1,img:"https://i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b.webp"},
                    {id:2,img:"https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp"},
                    {id:3,img:"https://i8.mifile.cn/v1/a1/26a132d9-c5ae-8a30-2705-f861e2e9f496.webp"},
                    {id:4,img:"https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp"},
                    {id:5,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adf3091f560d0cd6d82ffbc1a9d89006.jpg?thumb=1&w=144&h=152"},
                    {id:6,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152"},
                    {id:7,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152"},
                    {id:8,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152"},
                    {id:9,img:"https://i8.mifile.cn/v1/a1/e49720d6-3a48-ac6e-44d4-79f92b2e890c.webp"},
                    {id:10,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152"},
                ];
                break;
            case "zn":
                this.imgs = [
                    {id:1,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47dad0c224065a73a4c722eeaf1b8e1.jpg?thumb=1&w=144&h=152"},
                    {id:2,img:"https://i8.mifile.cn/v1/a1/eddc5967-7f37-bf45-72d9-de0db438658b.webp"},
                    {id:3,img:"https://i8.mifile.cn/v1/a1/8d73dc73-3a27-1587-6c43-47998c859a48.webp"},
                    {id:4,img:"https://i8.mifile.cn/v1/a1/afe66888-30af-d023-ebbe-6ed7e4607167.webp"},
                    {id:5,img:"https://i8.mifile.cn/v1/a1/3ad80cd6-0188-1c0a-95d3-aeaa58ede247.webp"},
                    {id:6,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9b8b8e686044afb2585e78a03ee96b6.png?thumb=1&w=144&h=152"},
                    {id:7,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3304e52970aa972c4f4ccd6eb424ad7.png?thumb=1&w=144&h=152"},
                    {id:8,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fed94691e4b361f237d411c3f687c2d4.png?thumb=1&w=144&h=152"},
                    {id:9,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2bc35b6be2ab377bfc7e8fddeaa54c5.png?thumb=1&w=144&h=152"},
                    {id:10,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d41a54c825db28e47888db6bd61349de.png?thumb=1&w=144&h=152"},
                ];
                break;
            case "bjb":
                this.imgs = [
                    {id:1,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/24e025e712fc41bf05f2e6b7998ba1db.jpg?thumb=1&w=144&h=152"},
                    {id:2,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0c93fe378e20d2b85c6373e559817f6.jpg?thumb=1&w=144&h=152"},
                    {id:3,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c39e0df85de64769d237c9d686afd56f.jpg?thumb=1&w=144&h=152"},
                    {id:4,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bb91631b44fb0fd1a23bd6c8f626683.jpg?thumb=1&w=144&h=152"},
                    {id:5,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e73d4d61caf902ebd2cc1c26dd618cb6.jpg?thumb=1&w=144&h=152"},
                ];
                break;
            case "jd":
                this.imgs = [
                    {id:1,img:"https://i8.mifile.cn/v1/a1/e44693a1-7703-8f89-fc0f-f280ee271ac9.webp"},
                    {id:2,img:"https://i8.mifile.cn/v1/a1/9debf9a2-ff6b-b166-dc9e-8df8dcadf696.webp"},
                    {id:3,img:"https://i8.mifile.cn/v1/a1/6c04eeb7-ba1f-a125-76b7-2639939d842f.webp"},
                    {id:4,img:"https://i8.mifile.cn/v1/a1/560c7937-dff9-459f-44ec-d8690b563e16.webp"},
                    {id:5,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5519a3c74b524f849f2c30b9f8b96b16.jpg?thumb=1&w=144&h=152"},
                ];
                break;
            case "shzb":
                this.imgs = [
                    {id:1,img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744a6c8c5fd696193d9f608f683f9c6e.jpg?thumb=1&w=144&h=152"},
                    {id:2,img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2aec734a14f5301128219279b016c9a6.jpg?thumb=1&w=144&h=152"},
                    {id:3,img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ebe7f67192ddb55b4f8f94f2e1ab4376.jpg?thumb=1&w=144&h=152"},
                    {id:4,img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/08b6ade705922f14f196bcd905903caf.jpg?thumb=1&w=144&h=152"},
                    {id:5,img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/921ce6cd7c033799e45ca01e32430402.jpg?thumb=1&w=144&h=152"},
                ];
                break;
            default:
                break;
        }
    },
}
</script>
<style lang="scss" scoped>
    .groupbar{
        display: flex;
        flex-wrap: wrap;
        img{
            width: 20%;
            height:.8rem;
        }
    }
</style>
