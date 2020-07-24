/*
 * @Author: your name
 * @Date: 2020-07-23 19:42:05
 * @LastEditTime: 2020-07-23 19:42:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/store/mutations.js
 */
export default {
  //但mutations中的每个方法尽可能完成的事件比较单一一点较好
  addCount(state, payload) { //这里的payload是actions里传过来的oldProduct
      payload.count++
    },
    addToCart(state, payload) {
      payload.count = 1
      state.cartList.push(payload)
    }
}
