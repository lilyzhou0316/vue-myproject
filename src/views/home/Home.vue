<!--
 * @Author: your name
 * @Date: 2020-07-15 18:12:06
 * @LastEditTime: 2020-07-20 14:05:54
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
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
    <goods-list :goodslist="goods['pop'].list"></goods-list>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>

      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>

      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>

      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>

      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>

      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>

      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>

      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>

      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>

      <li>10</li>
    </ul>
  </div>
</template>

<script>
// 子组件
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFasion from "./childComps/HomeFasion";
// 公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
//网络请求
import { getHomeMultiData, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFasion,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [], //保存从数据库里拿到的轮播图和推荐的数据数组
      recommends: [],
      goods: {
        //保存从数据库里拿到的商品的所有信息
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    //组件创建完成就会调用created方法
    //所以需要在这里发送home页的数据请求
    //但需要在methods里封装一下请求和处理数据的方法，而不是直接在
    //created里写，这样让created里的逻辑更清晰
    this.dealHomeMultiData();
    this.dealHomeGoods("pop");
    this.dealHomeGoods("new");
    this.dealHomeGoods("sell");
  },
  methods: {
    dealHomeMultiData() {
      getHomeMultiData().then(
        //请求轮播图和推荐的数据
        res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        },
        err => {
          console.log(err);
        }
      );
    },
    dealHomeGoods(type) {
      //请求商品数据
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        //将拿到的数据放到对应的list里
        //不能直接赋值，因为后面的数据会覆盖前面的数据，而不是拼接
        this.goods[type].list.push(...res.data.list);
        //当前页码加1
        this.goods[type].page += 1;
      });
    }
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
.tab-control {
  position: sticky;
  top: 43px;
  background-color: #fff;
}
</style>
