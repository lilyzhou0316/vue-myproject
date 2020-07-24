<!--
 * @Author: your name
 * @Date: 2020-07-22 16:38:56
 * @LastEditTime: 2020-07-23 13:31:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/detail/childComps/DetailInfo.vue
-->
<template>
  <div v-if="Object.keys(detailImgInfo).length !== 0" class="detail-img-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailImgInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailImgInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailImgInfo.detailImage[0].list"
        :src="item"
        :key="index"
        alt=""
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImgInfo",
  data() {
    return {};
  },
  props: ["detailImgInfo"],
  methods: {
    imgLoad() {
      this.$emit("detailImgLoad");
    }
  }
};
</script>

<style scoped>
.detail-img-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>
