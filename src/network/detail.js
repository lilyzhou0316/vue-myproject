/*
 * @Author: your name
 * @Date: 2020-07-21 22:10:12
 * @LastEditTime: 2020-07-22 20:16:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/src/network/detail.js
 */
import {
  request
} from './request';

export function getDetail(iid) {
  return request({ //返回的是一个promise对象
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommends() {
  return request({ //返回的是一个promise对象
    url: '/recommend',

  })
}

export class GoodsDetail {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class Params {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}
