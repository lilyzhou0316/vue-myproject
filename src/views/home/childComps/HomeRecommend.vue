<!--
 * @Author: your name
 * @Date: 2020-07-17 18:03:47
 * @LastEditTime: 2020-07-17 20:31:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/home/childComps/HomeRecommend.vue
-->
<template>
  <div class="home-recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <a :hred="item.link">
        <img :src="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {};
  },
  props: ["recommends"]
};
</script>

<style scoped>
.home-recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 15px 0px 25px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 80%;
  height: 80%;
  margin-bottom: 10px;
}
</style>
