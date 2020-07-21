<!--
 * @Author: your name
 * @Date: 2020-07-15 18:11:56
 * @LastEditTime: 2020-07-20 17:41:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/my-project/src/views/category/Category.vue
-->
<template>
  <div class="wrapper">
    <ul class="content">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>

<script>
import bs from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null
    };
  },
  components: {},
  mounted() {
    this.scroll = new bs(document.querySelector(".wrapper"), {
      probeType: true,
      pullUpLoad: true
    });
    // this.scroll.on("scroll", position => {
    //   //console.log(position);
    // });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      setTimeout(() => {
        this.scroll.finishPullUp(); //表示当前的pullingup事件已经执行完，可以执行下一次了
      }, 2000);
    });
  }
};
</script>

<style scoped>
.wrapper {
  /* 局部实现滚动：
  height: 100px;
  background-color: gray;
  overflow-y: scroll;
   */
  height: 150px;
  background-color: gray;
  overflow: hidden;
}
</style>
