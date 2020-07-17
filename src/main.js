/*
 * @Author: your name
 * @Date: 2020-07-16 21:36:41
 * @LastEditTime: 2020-07-17 15:35:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
