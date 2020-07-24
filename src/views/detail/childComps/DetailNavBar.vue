<!--
 * @Author: your name
 * @Date: 2020-07-21 21:22:45
 * @LastEditTime: 2020-07-23 15:13:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/detail/childComps/DetailNavBar.vue
-->
<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div class="titles" slot="center">
        <div slot="left" class="left-img" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
        <div
          class="title-item"
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },

  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.detail-nav-bar {
}
.titles {
  display: flex;
  font-size: 14px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.left-img {
  margin-top: 6px;
  margin-left: -8px;
  margin-right: 30px;
}
</style>
