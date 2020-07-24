/*
 * @Author: your name
 * @Date: 2020-07-16 21:36:41
 * @LastEditTime: 2020-07-23 18:38:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
