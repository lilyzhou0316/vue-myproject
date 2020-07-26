<!--
 * @Author: your name
 * @Date: 2020-07-15 18:12:27
 * @LastEditTime: 2020-07-25 17:04:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/my-project/src/views/shopcart/ShopCart.vue
-->
<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar">
      <div class="title" slot="center">购物车({{ cartLength }})</div>
    </nav-bar>

    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>

    <cart-bottom-bar class="bottom-bar" > </cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/betterscroll/Scroll";

import CartBottomBar from "./childComps/CartBottomBar";
import CartList from "./childComps/CartList";
import { mapGetters } from "vuex";

export default {
  name: "Shopcart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(["cartLength"])
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {}
};
</script>

<style scoped>
.shop-cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
}
.title {
  color: aliceblue;
  font-weight: bold;
  font-size: 18px;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}

.bottom-bar {
  height: 40px;
  background-color: rgb(231, 231, 231);
  position: relative;
  /* bottom: 40px; */
}
</style>
