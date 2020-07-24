<!--
 * @Author: your name
 * @Date: 2020-07-20 18:58:32
 * @LastEditTime: 2020-07-23 13:52:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/components/common/betterscroll/Scroll.vue
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bs from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      scroll: null
      //position: { x: 0, y: 0 }
    };
  },
  props: {
    probeType: {
      //probeType的值（是否实时监听滚动位置）由使用本组件的父组件传入来决定
      type: Number,
      default() {
        0;
      }
    },
    pullUpLoad: {
      //pullUpLoad为设置是否监听上拉加载更多事件，该值有父组件传入来决定
      type: Boolean,
      default() {
        false;
      }
    }
  },
  mounted() {
    //1.创建bs对象
    this.scroll = new bs(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });

    //2.监听滚动到底部的上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        //console.log("上拉加载更多");
        this.$emit("pullingUp");
        // setTimeout(() => {
        //   this.scroll.finishPullUp(); //表示当前的pullingup事件已经执行完，可以执行下一次了
        // }, 2000);
      });
    }

    //3.监听实时的滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        //console.log(position);
        //this.position = position;
        this.$emit("scroll", position);
      });
    }
  },
  methods: {
    refresh() {
      //console.log("refresh");
      //先判断scroll对象是否已经存在，再调用方法
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, time) {
      //console.log("______");
      //先判断scroll对象是否已经存在，再调用方法
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    getCurrentY() {
      return this.scroll && this.scroll.y;
    }
  }
};
</script>

<style scoped>
.scroll {
}
</style>
