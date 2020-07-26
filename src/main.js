/*
 * @Author: your name
 * @Date: 2020-07-16 21:36:41
 * @LastEditTime: 2020-07-25 19:09:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';
//从toast文件夹下导入了index.js文件并命名为toast
import toast from 'components/common/toast';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
//安装toast插件,这样会默认执行toast文件夹下index.js里的install方法
Vue.use(toast)

//使用vue-lazyload解决图片懒加载问题
//然后把所有的:src改成v-lazy
Vue.use(VueLazyLoad, { //第二个参数可选
  //loading当正在加载过程中，显示的图片
  loading: require('assets/img/common/placeholder.png')
})

//解决移动端300ms延迟的问题
FastClick.attach(document.body)



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
