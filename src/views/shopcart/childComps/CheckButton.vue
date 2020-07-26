<!--
 * @Author: your name
 * @Date: 2020-07-23 21:04:57
 * @LastEditTime: 2020-07-25 14:47:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/shopcart/childComps/CheckButton.vue
-->
<template>
  <div>
    <div
      class="icon-selector"
      :class="{ 'selector-active': checked }"
      @click="selectItem"
    >
      <img src="~/assets/img/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: ["value"],
  data: function() {
    return {
      checked: this.value
    };
  },
  methods: {
    selectItem: function() {
      this.$emit("checkBtnClick");
    }
  },
  watch: {
    value: function(newValue) {
      this.checked = newValue;
    }
  }
};
</script>

<style scoped>
.icon-selector {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}

.selector-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>
