<template>
    <div class="sj">
        <navr></navr>
        <img width="100%" src="https://i8.mifile.cn/v1/a1/5e6f96ac-352f-2522-caaa-d7e41f4dc601.webp" alt="">
        <!-- <tabbar></tabbar> -->
        <items></items>
        <div></div>
    </div>
</template>
<style lang="scss" scoped>
    .sj{
        width: 100%;
        height: 100%;
        // background: pink;
    }
</style>
<script>
import navr from '../../../components/navrs/navr'
// import tabbar from "../../../components/tabbar/tabbar"
import items from "../../../components/item/item"
export default {
    components:{
        navr,
        tabbar,
        items
    }
}
</script>