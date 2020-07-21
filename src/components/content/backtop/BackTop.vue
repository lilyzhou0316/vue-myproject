<!--
 * @Author: your name
 * @Date: 2020-07-20 20:30:38
 * @LastEditTime: 2020-07-20 20:44:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/components/content/backtop/BackTop.vue
-->
<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.backtop {
  position: fixed;
  bottom: 50px;
  right: 5px;
}
.backtop img {
  height: 50px;
  width: 50px;
}
</style>
