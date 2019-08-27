<template>
    <div class="select">
        <header>
            <img @click="back()" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABfUlEQVR4AWL4//8/oH1zzA4gCMJgbNv239i2beP+R8gXczpmV79XB9ja3UEDDJCAIAQhCEF/TBAgCEEIUkSKFrEoahD0VFCdOLtmWxQh6E5Okzh7xCyC7n85T+lyL0jREJDT434NMr6cAde7mLHmXDDkfptX1AfkjPk+B9lyRn0fFO01Z8r9SVrRGJAzLaL9CrJ/q4XvlnPBX5IT4/qyqqgJyFkWcX5v8/aXsyKSXKc7FLUBORuGHAeC7K18y5DjQ5CiOiBnU6T6zSjav9WWSPebcrV3qz2R4Tcnba85hyLTb9Le/nL2RY7fqsbLcnJdl30MOSeiwG9dzD4hX1DitnCoSBDlhpwy15VVRY9YDvxWhd/xYAjiF2ORLnYviG3+45dTDopcNbisftvvRrrjlQmzNAeCSLmStP9OSZR9KBx+6cK95LH0TPMC7S80UNGCRxMnbcA0kg8iiFEEhlkYh2Kg7vd/STvPj2Qy1NvKUO+PgCAEIQhBCEIQghAE53kdVfEUUHFYAAAAAElFTkSuQmCC" alt="">
            <input type="search"  v-model="val" placeholder="请输入搜索商品">
            <i class="iconfont" @click="serach(val)">&#xe607;</i>
        </header>
        <img width="100%" style="margin-top:.4rem" src="https://i8.mifile.cn/b2c-mimall-media/acd5d69d40a42a89cf2d2f67d2dfa0a2.jpg" alt="">
        <div class="showbox">
            <div class="filter" style="padding:0 .15rem">
                <div v-if="isup" @click="up(),isup=!isup">升序</div>
                <div v-else @click="up(),isup=!isup">降序</div>
            </div>
            <showitem :select="select"></showitem>
        </div>
   </div>
</template>
<style lang="scss" scoped>
    header{
        display: flex;
        height: .4rem;
        justify-content: space-between;
        align-items: center;
        background: #f2f2f2;
        padding:0 .15rem;
        position: fixed;
        width: 100%;
        top:0;
        left:0;
        img{
            width: .2rem;
            height:.2rem;
        }
        input{
            width:2.76rem;
            height: .26rem;
            outline: 0;
            border: 0;
            text-indent: .1rem;
        }
    }
</style>
<script>
import showitem from "./showitem"
export default {
    components:{
        showitem
    },
    data() {
        return {
            data:[],
            val:"小米",
            select:[],
            isup:false
        }
    },
    methods: {
        serach(val){
            //  console.log(val)
            this.select = this.data.filter(item=>{
                if(item.data.seo.title.toLowerCase().indexOf(val.toLowerCase()) !=-1){
                    return item
                }
            })
            // console.log(this.select)
        },
        back(){
            this.$router.push('/home/tj');
        },
        up(){
            if(this.isup){
                this.select.sort((a,b)=>{return a.data.goods_info[0].price-b.data.goods_info[0].price})
            }else{
                this.select.sort((a,b)=>{return b.data.goods_info[0].price-a.data.goods_info[0].price})
            }
         
        }
    },
     created() {
        this.$http.get('/data/msg.json').then(res=>{
            this.data=res.data 
        })
    },
}
</script>
