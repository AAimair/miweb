<template>
  <div class="home">
    <headers></headers>
    <div>
    <transition :duration="{enter:2000,leave:2000}" mode="" :enter-active-class="sx?'animated slideInRight':'animated slideInLeft'"
   :leave-active-class="sx?'animated slideOutLeft':'animated slideOutRight'">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
    </transition>

    </div>
        <tabbar></tabbar>
       

   
  </div>
</template>

<script>
// @ is an alias to /src
//引入头部组件
import headers from "./header"
//引入底部导航
import tabbar from "../../components/tabbar/tabbar"
import tj from "./tab/tj"
import { mapState,mapGetters,mapActions, mapMutations} from 'vuex'
export default {
    name:"home",
    data() {
      return {
          // type:""
      }
    },
    computed: {
      ...mapState({
        sx:state=>state.headertype.sx
        
    }),
    
    },
    components:{
       headers,tabbar
    },  
    
}
</script>

<style lang="scss" scoped>
    .home{
        width: 3.75rem;
       padding-top:0.76rem;
       padding-bottom:4.6rem;
      //  height: 6.67rem;
       div{
         position: fixed;
         width: 3.75rem;
          // overflow:hidden;
          height: auto;
          z-index: 1;
          top:0.76rem;
          bottom:0;
          // left:0;
          overflow-y: scroll;
       }
    }
</style>

