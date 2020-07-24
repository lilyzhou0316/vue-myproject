/*
 * @Author: your name
 * @Date: 2020-07-21 15:32:36
 * @LastEditTime: 2020-07-22 20:02:09
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

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
