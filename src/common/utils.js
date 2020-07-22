/*
 * @Author: your name
 * @Date: 2020-07-21 15:32:36
 * @LastEditTime: 2020-07-21 15:33:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/common/utils.js
 */


/**
 *防抖函数
 *这个 debounce 函数在给定的时间间隔内只允许你提供的回调函数执行一次，以此降低它的执行频率。
 *调用:	debounce(function() {}, 250)
 * @param {*} func回调函数
 * @param {*} wait等待时间,推荐250
 * @param {*} immediate，可选
 * @returns
 */
export function debounce(func, wait) {
  let timer = null; //用来记录有没有定时器
  return function (...args) {
    //如果之前有定时器，清除前一次定时器
    if (timer) clearTimeout(timer);
    //重新设置定时器
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
