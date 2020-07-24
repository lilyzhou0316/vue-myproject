<!--
 * @Author: your name
 * @Date: 2020-07-23 20:26:14
 * @LastEditTime: 2020-07-23 21:38:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/shopcart/childComps/cartList.vue
-->
<template>
  <div class="cart-list">
    <cart-list-item
      class="cart-item"
      v-for="(item, index) in cartList"
      :key="index"
      :product="item"
    >
    </cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  data() {
    return {};
  },
  components: { CartListItem },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>

<style scoped>
.cart-list {
}
</style>
