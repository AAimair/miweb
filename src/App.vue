<template>
  <div id="app">
        <transition name="router" mode="out-in">
          <keep-alive include="group,car">
            <router-view v-if="isRouterAlive"></router-view>
             </keep-alive>
        </transition>
  </div>
</template>
<style lang="scss">
    
</style>
<script>
import home from "../src/views/home/Home"
import mine from "../src/views/mine/mine"
import group from "../src/views/group/group"
  export default {
    components:{
      home
    },
    data () {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload () {
        this.isRouterAlive = false
        this.$nextTick(function() {
          this.isRouterAlive = true
        })
      }
    },
    provide () {
      return {
        reload: this.reload
      }
    }
  }
</script>

