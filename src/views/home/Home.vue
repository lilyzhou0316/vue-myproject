<!--
 * @Author: your name
 * @Date: 2020-07-15 18:12:06
 * @LastEditTime: 2020-07-21 17:32:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/my-project/src/views/home/Home.vue
-->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @itmClick="itmClick"
      ref="tabControl1"
      v-show="activeTabControl"
    >
    </tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="probeType"
      :pull-up-load="pullUpLoad"
      @scroll="showBT"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-fasion></home-fasion>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @itmClick="itmClick"
        ref="tabControl"
      >
      </tab-control>
      <goods-list :goodslist="showGoods"></goods-list>
    </scroll>
    <!-- <div @click="btClick">
      <back-top></back-top>
    </div> -->
    <back-top @click.native="btClick" v-show="showBackTop"></back-top>
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
import Scroll from "components/common/betterscroll/Scroll";
import BackTop from "components/content/backtop/BackTop";
//网络请求
import { getHomeMultiData, getHomeGoods } from "network/home";
//工具
import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFasion,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
      },
      currentType: "pop",
      probeType: 3,
      pullUpLoad: true,
      showBackTop: false,
      tabOffSetTop: 0,
      activeTabControl: false
    };
  },
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    //所有的数据请求方法
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
        //将拿到的所有数据放到对应的list里
        //不能直接赋值，因为后面的数据会覆盖前面的数据，而不是拼接
        this.goods[type].list.push(...res.data.list);
        //当前页码加1
        this.goods[type].page += 1;
      });
    },

    //当tab被点击时currentType发生变化,从而显示不同的数据
    itmClick(index) {
      //console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },

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
    showBT(position) {
      //监听滚动位置
      //console.log(position);
      //1.判断backtop按钮是否显示
      this.showBackTop = position.y < -1000;

      //2.判断tabcontrol组件是否需要吸顶
      this.activeTabControl = position.y < -this.tabOffSetTop;
    },
    loadMore() {
      this.dealHomeGoods(this.currentType);
      this.$refs.scroll.scroll.finishPullUp();
      //this.$refs.scroll.scroll.refresh(); //解决滚动途中卡顿问题
    },
    //获取tabControl的offsettop值,当home页面滚动到对应位置时使tabcontrol显示吸顶效果
    //所有组件都有一个属性叫$el，用于获取组件对象里的元素
    swiperImgLoad() {
      //console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffSetTop = this.$refs.tabControl.$el.offsetTop;
    }
  },
  created() {
    //组件创建完成就会调用created方法
    //所以需要在这里发送home页的数据请求,将所有数据都获取
    //但需要在methods里封装一下请求和处理数据的方法，而不是直接在
    //created里写，这样让created里的逻辑更清晰
    this.dealHomeMultiData();

    //请求商品数据
    this.dealHomeGoods("pop");
    this.dealHomeGoods("new");
    this.dealHomeGoods("sell");
  },
  mounted() {
    //1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    //通过bus监听item组件中的图片加载完成
    this.$bus.$on("itmImgLoad", () => {
      //console.log('加载完成');
      //解决图片卡顿问题  this.$refs.scroll &&
      refresh();
    });
  }
};
</script>

<style scoped>
#home {
  /* 由于顶部导航条固定所以其它组件需要往下移动44px */
  /* padding-top: 44px; */
  /* vh为视口高度 */
  height: 100vh;
  /* position: relative; */
}
.home-nav {
  background-color: var(--color-tint);
  color: azure;
  font-size: 20px;
  /* 顶部导航条固定 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100; */
}

.content {
  /* height: calc(100% - 93px);
  overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-control {
  position: relative;
  z-index: 10;
}
</style>
