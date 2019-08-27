import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import headertype from "./headertype/index"
import cars from "./car/index"
export default new Vuex.Store({
  modules:{
    headertype,
    cars
  }
})
