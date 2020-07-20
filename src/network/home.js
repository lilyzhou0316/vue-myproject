/*
 * @Author: your name
 * @Date: 2020-07-17 16:27:39
 * @LastEditTime: 2020-07-20 14:22:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/network/home.js
 */
import {
  request
} from './request';

// 因为首页一定会不止一个数据请求，所以需要在这里对所有的请求进行一个管理
//方便后续进行修改，而不是写到home.vue里
export function getHomeMultiData() {
  return request({ //返回的是一个promise对象
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({ //返回的是一个promise对象
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
