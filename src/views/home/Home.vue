<!--
 * @Author: your name
 * @Date: 2020-07-15 18:12:06
 * @LastEditTime: 2020-07-17 20:14:32
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
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import { getHomeMultiData } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
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
    getHomeMultiData()
      .then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      .catch();
  }
};
</script>

<style scoped>
.home-nav {
  background-color: pink;
  color: azure;
  font-size: 20px;
}
</style>
