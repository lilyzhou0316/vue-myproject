/*
 * @Author: your name
 * @Date: 2020-07-17 16:23:58
 * @LastEditTime: 2020-07-20 14:06:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit,
 * @FilePath: /vue/shopping-app/src/network/request.js
 */
import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3', //'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
