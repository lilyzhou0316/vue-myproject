/*
 * @Author: your name
 * @Date: 2020-07-22 21:07:37
 * @LastEditTime: 2020-07-23 16:49:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/common/mixin.js
 */
import {
  debounce
} from './utils';
import BackTop from "components/content/backtop/BackTop";

export const imgLoadListenerMixin = {
  data() {
    return {
      newrefresh: null
    }
  },
  mounted() { //1.图片加载完成的事件监听
    this.newrefresh = debounce(this.$refs.scroll.refresh, 100)
    //通过bus监听item组件中的图片加载完成
    this.$bus.$on("itmImgLoad", () => {
      //console.log('加载完成');
      //解决图片卡顿问题  this.$refs.scroll &&
      this.newrefresh();
    })
    //console.log('混入');
  }

}

export const backTopMinxin = {
  data() {
    return {
      showBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    //监听backtop按钮的点击事件
    //自定义组件标签不能直接监听原生事件，需要加上.native才可以
    //或者给组件包上一个外层div
    btClick() {
      //console.log("back to top");
      //通过this.$refs.scroll拿到scroll组件对象，它里面包含一个scroll变量
      //然后通过该scroll变量调用betterscroll的scrollTo方法
      //该方法可以滚动到指定位置
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
  },
}
