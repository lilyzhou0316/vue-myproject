<!--
 * @Author: your name
 * @Date: 2020-07-17 21:30:50
 * @LastEditTime: 2020-07-20 15:26:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/components/content/tabcontrol/TabControl.vue
-->
<template>
  <div class="tab-control">
    <!-- 这里可以不用插槽，因为所有使用这个组件的界面里，只有文字部分不一致 -->
    <div
      class="tab-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{
        active: index === currentIndex //动态绑定样式
      }"
      @click="itmClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0 //记录当前被选中的对象的index
    };
  },
  props: {
    titles: {
      //父组件传过来需要显示的titles
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itmClick(index) {
      this.currentIndex = index; //点击谁，谁的index就是currentIndex
      this.$emit("itmClick",index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  z-index: 99;
  background-color: #fff;
}

.tab-item {
  flex: 1;
  line-height: 40px;
  height: 40px;
}
.active {
  /* var(--color-high-text)为之前在base.css里定义的颜色 */
  color: var(--color-high-text);
}
.active span {
  padding-bottom: 5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>
