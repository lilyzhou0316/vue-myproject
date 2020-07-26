<!--
 * @Author: your name
 * @Date: 2020-07-25 15:24:25
 * @LastEditTime: 2020-07-25 17:14:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/components/common/toast/Toast.vue
-->
<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  //   props: ["isShow"],
  methods: {
    show(message, time = 1500) {
      //
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, time);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  color: aliceblue;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
}
</style>
