/*
 * @Author: your name
 * @Date: 2020-07-25 16:24:47
 * @LastEditTime: 2020-07-25 16:54:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/components/common/toast/index.js
 */
import Toast from './Toast.vue';
const obj = {}
obj.install = function (Vue) {
  //1.创建组件构造器
  const toastConstrutor = Vue.extend(Toast)

  //2.new的方式，根据组件构造器，可以创建一个组件对象
  const toast = new toastConstrutor()

  //3.将组件对象手动挂载到某个元素上
  toast.$mount(document.createElement('div'))

  //4.此时toast.$el对应的就是上面创建的div
  document.body.appendChild(toast.$el)
  //install函数在执行时会默认传过来一个参数为Vue
  Vue.prototype.$toast = toast
}

export default obj
