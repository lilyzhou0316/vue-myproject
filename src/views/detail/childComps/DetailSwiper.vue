<!--
 * @Author: your name
 * @Date: 2020-07-21 22:23:09
 * @LastEditTime: 2020-07-21 22:35:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/detail/childComps/DetailSwiper.vue
-->
<template>
  <div class="detail-swiper">
    <swiper class="swiper-item">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  props: ["topImages"],
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-swiper {
}
.swiper-item {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
</style>
