<!--
 * @Author: your name
 * @Date: 2020-07-16 21:36:41
 * @LastEditTime: 2020-07-17 15:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
