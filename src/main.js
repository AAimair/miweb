import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store/store'
// import iView from 'iview';

//引入animate
import animate from 'animate.css'
//注册公共组件
// import iView from 'iview';
import item from './components/item/item'
Vue.config.productionTip = false
//引入homw图标
import "./assets/iconfont_home/iconfont.css"
import "./assets/iconfont_group/iconfont.css"
// 引入rem设置
import "./style/rem"
// 引入iviews样式
import 'iview/dist/styles/iview.css'; 
import { Button,Anchor,Affix,Message,Alert,AnchorLink} from 'iview';
//引入swiper样式
import "swiper/dist/css/swiper.min.css";
//引入axios
import axios from 'axios'
import navr from "./components/navrs/navr"
//引入主文件样式
import './style/main.scss'
//添加给vue原型对象上
// Vue.use(iView);
Vue.prototype.$http = axios;
Vue.prototype.$Message = Message;
Vue.component('Affix', Affix);
Vue.component('Anchor', Anchor);
Vue.component('i-button', Button);
Vue.component('navr', navr);
Vue.component('AnchorLink', AnchorLink);
Vue.component('item', item);
Vue.component('Alert', Alert);

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
let arr = [ 
  {id:1,name:"推荐",type:"tj"},
  {id:2,name:"手机",type:"sj"},
  {id:3,name:"七夕节",type:"qxj"},
  {id:4,name:"智能",type:"zn"},
  {id:5,name:"电视",type:"ds"},
  {id:6,name:"笔记本",type:"bjb"},
  {id:7,name:"家电",type:"jd"},
  {id:8,name:"生活周边",type:"shzb"}
]
var oldid=""
var newid=""
router.beforeEach((to,from,next)=>{
  vue.$store.dispatch('getcar')
  vue.$store.commit('updatehome',to.name)
  vue.$store.commit("updatepath",to.name)
  // console.log(vue.$store.state.headertype.hometype)
  window.scrollTo(0,0)
  arr.forEach(element => {
      if(from.name==element.type){
         oldid =  element.id
      }else if(to.name==element.type){
          newid =  element.id
      }
     
  });

  if(newid-oldid>0){
    vue.$store.commit("updateType",true)
  }else{
    vue.$store.commit("updateType",false)
  }

  if(to.matched[0].path == "/home"){
    vue.$store.commit("updateIstab",true)
  }else{
    vue.$store.commit("updateIstab",false)
  }
    

  next()
})
