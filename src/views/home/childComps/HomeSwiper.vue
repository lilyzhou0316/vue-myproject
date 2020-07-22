<!--
 * @Author: your name
 * @Date: 2020-07-17 17:50:49
 * @LastEditTime: 2020-07-21 16:35:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/home/childComps/HomeSwiper.vue
-->
<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" @load="swiperImgLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    },
    recommends: Array
  },
  components: { Swiper, SwiperItem },
  methods: {
    swiperImgLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style scoped></style>
