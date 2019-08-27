<template>
    <div id="tj">
            <navr></navr>
            <groupbar></groupbar>
            <div class="divider_line" index="3" style="height: 0.08rem; border-bottom: 0.08rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>
            <item></item>  
            <!-- <tabbar></tabbar>   -->
    </div>
    
</template>
<style lang="scss" scoped>
    #tj{
        margin-bottom:60px;
    }

</style>
<script>
import navr from '../../../components/navrs/navr';
import groupbar from '../../../components/tabbar/groupbar'
import tabbar from "../../../components/tabbar/tabbar"
export default {
    components:{
        navr,
        groupbar,
        tabbar
    },
    data() {
        return {
           
        }
    },
}
</script>