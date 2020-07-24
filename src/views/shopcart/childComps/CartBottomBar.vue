<!--
 * @Author: your name
 * @Date: 2020-07-23 21:34:02
 * @LastEditTime: 2020-07-23 23:04:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/shopcart/childComps/CartBottomBar.vue
-->
<template>
  <div class="cart-bottom-bar">
    <div class="checked">
      <check-button class="check-button"></check-button>
      <span>全选</span>
      <span class="total-price">合计：{{ totalprice }}</span>
      <span class="pay">结账 ({{ checkLength }})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "CartBuottomBar",
  data() {
    return {};
  },
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    totalprice() {
      return (
        "¥" +
        this.$store.getters.cartList
          .filter(item => {
            return item.checked; //当checked值为true时对应的item才会被返回
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.getters.cartList.filter(item => item.checked).length;
    }
  },
  components: {
    CheckButton
  }
};
</script>

<style scoped>
.cart-buottom-bar {
}
.checked {
  display: flex;
  height: 40px;
  margin-left: 3%;
  align-items: center;
  line-height: 40px;
}
.check-button {
  margin-right: 3%;
  line-height: 20px;
}
.total-price {
  margin-left: 5%;
  margin-right: 4%;
  flex: 1;
}
.pay {
  width: 27%;
  height: 40px;
  text-align: center;
  background-color: var(--color-tint);
  color: aliceblue;
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
}
</style>
