/*
 * @Author: your name
 * @Date: 2020-07-17 14:57:55
 * @LastEditTime: 2020-07-17 15:03:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/shopping-app/vue.config.js
 */
module.exports = {
    configureWebpack: {
        resolve: {
            alias: { //@代表src
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}