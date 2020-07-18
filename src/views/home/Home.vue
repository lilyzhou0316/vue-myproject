<!--
 * @Author: your name
 * @Date: 2020-07-15 18:12:06
 * @LastEditTime: 2020-07-17 21:27:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/my-project/src/views/home/Home.vue
-->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-fasion></home-fasion>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFasion from "./childComps/HomeFasion";
import { getHomeMultiData } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFasion
  },
  data() {
    return {
      banners: [], //保存从数据库里拿到的数据数组
      recommends: []
    };
  },
  created() {
    //组件创建完成就会调用created方法
    //所以需要在这里发送home页的数据请求
    getHomeMultiData().then(
      res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      },
      err => {
        console.log(err);
      }
    );
  }
};
</script>

<style scoped>
#home {
  /* 由于顶部导航条固定所以其它组件需要往下移动44px */
  padding-top: 44px;
}
.home-nav {
  background-color: pink;
  color: azure;
  font-size: 20px;
  /* 顶部导航条固定 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}
</style>
