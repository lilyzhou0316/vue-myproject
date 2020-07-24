/*
 * @Author: your name
 * @Date: 2020-07-23 20:01:48
 * @LastEditTime: 2020-07-23 20:31:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/store/getters.js
 */
export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  }

}
