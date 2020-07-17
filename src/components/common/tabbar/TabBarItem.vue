<!--
 * @Author: your name
 * @Date: 2020-07-15 17:28:31
 * @LastEditTime: 2020-07-15 20:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/my-project/src/components/tabbar/TabBarItem.vue
-->
<template>
  <div class="tab-bar-item" @click="itmClick">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->
    <!-- 插槽会被直接全部替换，所以需要套一个div -->
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {};
  },
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    isActive() {
      //$route是当前活跃的路由，拿到它的path并判断该path里是否
      //和上面props里传过来的path一致，如果一致，结果为true，而其它非活跃路由的判断结果为false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itmClick() {
      //处理点击事件，当被点击时跳转对应的view，path为props里由父组件传过来的
      //console.log("click");
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}

/* .active {
  color: pink;
} */
</style>
