<!--
 * @Author: your name
 * @Date: 2020-07-15 20:01:25
 * @LastEditTime: 2020-07-17 15:39:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/my-project/src/components/tabbar/MainTabBar.vue
-->
<template>
  <tab-bar>
    <!-- 这里path是以string的格式传给子组件，所以不需要v-bind绑定
      activeColor是指定被点击后的item-text颜色需要传给子组件,这样可以动态改变颜色而不用写死 -->
    <tab-bar-item path="/home" activeColor="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-img-active"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-img-active"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="deeppink">
      <img
        slot="item-img-active"
        src="~assets/img/tabbar/cart_active.svg"
        alt=""
      />
      <img slot="item-img" src="~assets/img/tabbar/cart.svg" alt="" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deeppink">
      <img
        slot="item-img-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <img slot="item-img" src="~assets/img/tabbar/profile.svg" alt="" />

      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
/* @import "./assets/css/base.css"; */
</style>
