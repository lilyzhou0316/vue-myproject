<!--
 * @Author: your name
 * @Date: 2020-07-23 21:34:02
 * @LastEditTime: 2020-07-25 17:11:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/views/shopcart/childComps/CartBottomBar.vue
-->
<template>
  <div class="cart-bottom-bar">
    <div class="checked">
      <check-button
        class="check-button"
        @checkBtnClick="checkBtnClick"
        v-model="isSelectAll"
      >
      </check-button>
      <span>全选</span>
      <span class="total-price">合计：{{ totalprice }}</span>
      <span class="pay" @click="payBtnClick">结账 ({{ checkLength }})</span>
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
    },
    isSelectAll() {
      //如果有没被选中的商品，则isSelectAll为true
      //还要考虑购物车为空的情况
      if (this.$store.getters.cartList.length === 0) {
        return false;
      } else {
        //console.log(!this.$store.getters.cartList.find(item => !item.checked));
        return !this.$store.getters.cartList.find(item => !item.checked);
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkBtnClick() {
      //console.log("click");
      if (!this.isSelectAll) {
        //如果有商品没被选中
        //遍历cartList，让每一个商品的checked都为true
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        });
      } else {
        //如果所有商品都被选中了，则让每一个商品的checked都为false
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        });
      }
    },
    payBtnClick() {
      // console.log(
      //   this.$store.getters.cartList.filter(item => item.checked).length
      // );
      if (
        //如果没有商品被选中
        this.$store.getters.cartList.filter(item => item.checked).length === 0
      ) {
        this.$toast.show("请选择需要购买的商品", 2000);
      }
    }
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
