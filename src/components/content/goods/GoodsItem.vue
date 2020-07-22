<!--
 * @Author: your name
 * @Date: 2020-07-18 14:22:58
 * @LastEditTime: 2020-07-21 14:18:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/components/content/goods/GoodsItem.vue
-->
<template>
  <div class="goods-item">
    <img :src="goodsitem.show.img" @load="imgLoad" />
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
  props: ["goodsitem"],
  methods: {
    //监听每一张图片是否加载完
    imgLoad() {
      //console.log("加载完成");
      //1.先在main.js中给vue添加一个bus属性，通过事件总线bus发射事件，在其它组件就可以通过$bus.$on监听到了
      //2.也可以用vuex设置一个变量
      this.$bus.$emit("itmImgLoad");
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
