<!--
 * @Author: your name
 * @Date: 2020-07-15 16:59:49
 * @LastEditTime: 2020-07-21 17:12:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/my-project/src/components/tabbar/TabBar.vue
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {}
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
  /* z-index: 99; */
}
</style>
