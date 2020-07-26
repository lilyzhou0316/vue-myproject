/*
 * @Author: your name
 * @Date: 2020-07-23 19:43:21
 * @LastEditTime: 2020-07-25 15:18:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/store/actions.js
 */
export default {
  addProduct(context, payload) {
    //payload为detail组件里传过来的product
    //需要判断新添加的商品是否在数组里已存在
    return new Promise((res) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) { //如果商品已经在购物车里，则其数量加1
        res('商品数量+1')
        context.commit('addCount', oldProduct) //调用mutations里的addCount
      } else { //如果购物车里没有该商品，则加入购物车
        res('添加新商品')
        context.commit('addToCart', payload)
      }
    })

  }
}
