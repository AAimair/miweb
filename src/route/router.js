import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//引入首页路由
import home from "./home"
import items from './items'
import select from './select'
import login from './login'
import zc from './zc'
export default new Router({
  routes: [
    {path:"/",redirect:"home"},
    // {path:"/*",redirect:"/group"},
    home,
    items,
    select,
    login,
    zc,
    {path: '*',name: '404',component: () => import('../views/no_found.vue')},
    {path: '/group',name: 'group',component: () => import('../views/group/group.vue')},
    {path: '/car',name: 'car',component: () => import('../views/car/car.vue')},
    {path: '/mine',name: 'mine',component: () => import('../views/mine/mine.vue')}

  ] 
})