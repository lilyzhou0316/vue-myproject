<!--
 * @Author: your name
 * @Date: 2020-07-22 17:03:33
 * @LastEditTime: 2020-07-22 17:11:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editvue

 * @FilePath: /vue/shopping-app/src/views/detail/childComps/DetailParams.vue
-->
<template>
  <div class="detail-params" v-if="Object.keys(params).length !== 0">
    <table
      v-for="(table, index) in params.sizes"
      class="info-size"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info, index) in params.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="params.image.length !== 0">
      <img :src="params.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  data() {
    return {};
  },
  props: ["params"]
};
</script>

<style scoped>
.detail-params {
     padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>
