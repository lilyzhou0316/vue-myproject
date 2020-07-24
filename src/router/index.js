/*
 * @Author: your name
 * @Date: 2020-07-15 13:31:49
 * @LastEditTime: 2020-07-21 20:51:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/my-project/src/router/index.js
 */
import Vue from 'vue'

import VueRouter from 'vue-router'


//1.安装插件
Vue.use(VueRouter)

//懒加载
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Shopcart = () => import('views/shopcart/Shopcart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')

//2.创建路由对象
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    // 指定route名字和对应的组件文件（需导入）
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  //指定路径模式为history
  mode: 'history'
})

//3.导出，然后在main.js里导入并添加到vue实例上
export default router
