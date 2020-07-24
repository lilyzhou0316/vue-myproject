<!--
 * @Author: your name
 * @Date: 2020-07-22 13:58:05
 * @LastEditTime: 2020-07-22 16:20:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/detail/childComps/DetailBaseInfo.vue
-->
<template>
  <div v-if="Object.keys(goodsDetail).length !== 0" class="detail-base-info">
    <div class="goods-title">{{ goodsDetail.title }}</div>
    <div class="goods-price">
      <span class="price">{{ goodsDetail.price }}</span>
      <span class="old-price">{{ goodsDetail.oldPrice }}</span>
      <span v-if="goodsDetail.discount" class="discount">
        {{ goodsDetail.discount }}
      </span>
    </div>
    <div class="columns-info">
      <span class="sells">{{ goodsDetail.columns[0] }}</span>
      <span class="collection">{{ goodsDetail.columns[1] }}</span>
      <span class="return">
        {{ goodsDetail.services[goodsDetail.services.length - 1].name }}
      </span>
    </div>
    <div class="line"></div>
    <div class="services-info">
      <span v-for="index in goodsDetail.services.length - 1" :key="index">
        <img :src="goodsDetail.services[index - 1].icon" alt="" />
        {{ goodsDetail.services[index - 1].name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: ["goodsDetail"]
};
</script>

<style scoped>
.detail-base-info {
}

.goods-title {
  font-size: 16px;
  text-align: justify;
  padding-left: 4px;
  padding-right: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.price {
  color: var(--color-high-text);
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;
}

.sells,
.collection,
.return {
  font-size: 13px;
  padding-right: 4px;
  color: darkgrey;
  margin-top: 20px;
}

.old-price {
  font-size: 13px;
  padding-right: 4px;
  color: darkgrey;
  text-decoration: line-through;
}
.discount {
  background-color: var(--color-tint);
  border-radius: 4px;
  font-size: 13px;
  color: aliceblue;
  text-align: center;
  padding: 2px 4px;
  font-weight: bold;
}
.columns-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  margin-bottom: 15px;
}
.services-info {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
}
.services-info span {
  font-size: 14px;
}
.services-info span img {
  width: 13px;
  height: 13px;
  margin-right: 2px;
}
.line {
  border-top: 1px solid rgb(243, 240, 240);
}
</style>
