<!--
 * @Author: your name
 * @Date: 2020-07-18 14:22:58
 * @LastEditTime: 2020-07-22 21:07:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/components/content/goods/GoodsItem.vue
-->
<template>
  <div class="goods-item" @click="goodsItmClick">
    <img :src="getImg" @load="imgLoad" />
    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">价格：{{ goodsitem.price }}</span>
      <span class="collection">收藏：{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  data() {
    return {};
  },
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    getImg() {
      //判断，传过来的商品信息里，获取其img的方式可能不一样
      return this.goodsitem.image || this.goodsitem.show.img;
    }
  },
  props: ["goodsitem"],
  methods: {
    //监听每一张图片是否加载完
    imgLoad() {
      //console.log("加载完成");
      //1.先在main.js中给vue添加一个bus属性，通过事件总线bus发射事件，在其它组件就可以通过$bus.$on监听到了
      //2.也可以用vuex设置一个变量

      //用if判断是发给哪个路由的，也可以用mixin混入
      // if (this.$route.path.indexof("/home") !== -1) {
      //   this.$bus.$emit("homeItmImgLoad");
      // } else if (this.$route.path.indexof("/detail") !== -1) {
      //   this.$bus.$emit("detailItmImgLoad");
      // }
      this.$bus.$emit("itmImgLoad");
    },
    goodsItmClick() {
      //console.log("跳转");
      //设置点击商品跳转到详情页
      this.$router.push("/detail/" + this.goodsitem.iid);
    }
  }
};
</script>

<style scoped>
.goods-item {
  /* 父元素开启了flex 且flex-wrap设置为wrap*/
  width: 46%;
  padding-bottom: 40px;
  position: relative;
}
.goods-item img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.goods-item .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .collection {
  position: relative;
}
.goods-info .collection::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
