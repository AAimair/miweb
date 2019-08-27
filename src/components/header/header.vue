<template>
    <div class="header" > 
            <div :class="isshow?'active':''">
                <router-link :to="{name:'tj'}"><i class="iconfont">&#xe624;</i></router-link>
                <span>分类</span>
                <i @click="search()" class="iconfont">&#xe607;</i>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isshow:false
        }
    },
    created() {
        setTimeout(()=>{
            this.isshow=true
        },1)  
    },
    methods: {
        search(){
            this.$router.push("/select")
        }
    },
}
</script>

<style lang="scss" scoped>
       .header{
           position: fixed;
           top:0;
           left:0;
           z-index: 11;
           width: 100%;
            div{
                height: 0rem;
                background: #f2f2f2;
                padding:0 0.1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                transition: 0.5s;
                overflow: hidden;
            }
            .active{
                height: 0.5rem;
                background: #f2f2f2;
                padding:0 0.1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                transition: 0.5s;
                box-shadow: 0 2px 3px #ccc;
            }
        }
</style>

