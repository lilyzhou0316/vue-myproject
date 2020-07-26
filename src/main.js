/*
 * @Author: your name
 * @Date: 2020-07-16 21:36:41
 * @LastEditTime: 2020-07-25 16:30:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
//从toast文件夹下导入了index.js文件并命名为toast
import toast from 'components/common/toast';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
//安装toast插件,这样会默认执行toast文件夹下index.js里的install方法
Vue.use(toast)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
