<!--
 * @Author: your name
 * @Date: 2020-07-18 14:22:39
 * @LastEditTime: 2020-07-22 20:36:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/components/content/goods/GoodsList.vue
-->
<template>
  <div class="goods-list">
    <goods-item
      v-for="(item, index) in goodslist"
      :key="index"
      :goodsitem="item"
    >
    </goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";

export default {
  name: "GoodsList",
  data() {
    return {};
  },
  props: ["goodslist"],
  components: {
    GoodsItem
  }
};
</script>

<style scoped>
.goods-list {
  display: flex;
  /* flex-wrap: wrap  让子元素根据自身宽度决定一行放几个 */
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 2px;
}
</style>
