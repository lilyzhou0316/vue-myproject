<!--
 * @Author: your name
 * @Date: 2020-07-21 20:45:49
 * @LastEditTime: 2020-07-25 16:54:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/detail/Detail.vue
-->
<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="navbar"
    >
    </detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods-detail="goodsDetail"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-img-info
        :detail-img-info="detailImgInfo"
        @detailImgLoad="detailImgLoad"
      ></detail-img-info>

      <detail-params :params="params" ref="params"></detail-params>
      <detail-comment-info
        :comments="comments"
        ref="comments"
      ></detail-comment-info>
      <goods-list :goodslist="recommends" ref="recommends"></goods-list>
    </scroll>

    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top class="back-top" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailImgInfo from "./childComps/DetailImgInfo";
import DetailParams from "./childComps/DetailParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/betterscroll/Scroll";
// import Toast from "components/common/toast/Toast";

import {
  getDetail,
  getRecommends,
  GoodsDetail,
  Shop,
  Params
} from "network/detail";
import { imgLoadListenerMixin, backTopMinxin } from "common/mixin";
import { debounce } from "common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImgInfo,
    DetailParams,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll
    //Toast
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsDetail: {},
      shop: {},
      detailImgInfo: {},
      params: {},
      comments: {},
      recommends: [],
      offsetTopY: [],
      getOffsetTopY: null,
      positionY: 0,
      currentIndex: -1
      //不封装情况下toast组件需要传入的参数
      // isShow: false,
      // message: ""
    };
  },
  mixins: [imgLoadListenerMixin, backTopMinxin],

  created() {
    //1.保存传入的id
    this.iid = this.$route.params.id;

    //2.根据iid请求对应的商品数据
    getDetail(this.iid).then(res => {
      //console.log(res);
      //1.获取顶部轮播图图片
      this.topImages = res.result.itemInfo.topImages;

      //2.获取商品文字价格等信息
      this.goodsDetail = new GoodsDetail(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );

      //3.获取商品店铺信息
      this.shop = new Shop(res.result.shopInfo);

      //4.获取商品图片展示信息
      this.detailImgInfo = res.result.detailInfo;

      //5.获取商品参数信息
      this.params = new Params(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );

      //6.获取商品评论信息
      if (res.result.rate.cRate !== 0) {
        //console.log(res.result.rate.list[0]);
        this.comments = res.result.rate.list[0];
      }
    });

    //3.请求推荐商品数据
    getRecommends().then(res => {
      this.recommends = res.data.list;
    });

    //获取商品，参数，评论和推荐组件的offsettop值
    //   this.$nextTick(() => {
    //     //nextTick函数会在界面上所有数据和dom渲染完成后调用
    //     //但是图片还没有渲染完
    //     //offsetTopY值不对一般都是因为图片未加载完成
    //     this.offsetTopY = [];
    //     this.offsetTopY.push(0);
    //     this.offsetTopY.push(-this.$refs.params.$el.offsetTop + 44);
    //     this.offsetTopY.push(-this.$refs.comments.$el.offsetTop + 44);
    //     this.offsetTopY.push(-this.$refs.recommends.$el.offsetTop + 44);

    //console.log(this.offsetTopY);
    //   });

    //4.获取商品，参数，评论和推荐组件的offsettop值
    this.getOffsetTopY = debounce(() => {
      this.offsetTopY = [];
      this.offsetTopY.push(0);
      this.offsetTopY.push(-this.$refs.params.$el.offsetTop + 44);
      this.offsetTopY.push(-this.$refs.comments.$el.offsetTop + 44);
      this.offsetTopY.push(-this.$refs.recommends.$el.offsetTop + 44);
      //console.log(this.offsetTopY);
    }, 100);
  },
  mounted() {},
  methods: {
    detailImgLoad() {
      this.newrefresh(); //newrefresh来自于mixins里的imgLoadListenerMixin
      this.getOffsetTopY();
    },
    titleClick(index) {
      //   console.log(index);
      this.$refs.scroll.scrollTo(0, this.offsetTopY[index], 10);
    },
    contentScroll(position) {
      //console.log(position);
      //1.获取滚动位置y值
      this.positionY = -position.y;
      //console.log(this.positionY);
      //2.根据当前滚动的位置的y值，给currentindex赋值
      if (this.currentIndex !== 0 && this.positionY < -this.offsetTopY[1]) {
        this.currentIndex = 0;
        //console.log(this.currentIndex);
      } else if (
        this.currentIndex !== 1 &&
        this.positionY < -this.offsetTopY[2] &&
        this.positionY >= -this.offsetTopY[1]
      ) {
        this.currentIndex = 1;

        //console.log(this.currentIndex);
      } else if (
        this.currentIndex !== 2 &&
        this.positionY < -this.offsetTopY[3] &&
        this.positionY >= -this.offsetTopY[2]
      ) {
        this.currentIndex = 2;
        // console.log(this.currentIndex);
      } else if (
        this.currentIndex !== 3 &&
        this.positionY >= -this.offsetTopY[3]
      ) {
        this.currentIndex = 3;
        //console.log(this.currentIndex);
      }
      this.$refs.navbar.currentIndex = this.currentIndex;

      //3.判断是否显示backtop按钮
      this.showBackTop = position.y < -1000;
    },
    addToCart() {
      //console.log("add to cart");
      //1.获取商品信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goodsDetail.title;
      product.desc = this.goodsDetail.desc;
      product.price = this.goodsDetail.realPrice;
      product.iid = this.iid;
      //2.将商品加入添加到购物车
      //将product传给store里的addProduct方法中
      //addProduct会返回一个promise对象回来
      this.$store.dispatch("addProduct", product).then(res => {
        //3.显示添加购物车成功
        //console.log(res);
        //方案1:不封装情况下使用toast组件
        // this.isShow = true;
        // this.message = res;
        // setTimeout(() => {
        //   this.isShow = false;
        //   this.message = "";
        // }, 1500);

        //方案2.封装toast组件到Vue的原型上（show方法来自于toast组件）
        this.$toast.show(res);
      });
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 58px);
}
.back-top {
  margin-bottom: 8px;
}
</style>
