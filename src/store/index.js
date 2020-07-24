/*
 * @Author: your name
 * @Date: 2020-07-23 18:34:16
 * @LastEditTime: 2020-07-23 19:44:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/store/index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

//1.安装插件
Vue.use(Vuex)

const state = {
  cartList: []
}

//2.创建store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

//3.挂载vue实例上
export default store
