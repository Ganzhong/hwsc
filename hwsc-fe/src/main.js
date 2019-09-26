/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 15:19:03
 * @LastEditTime: 2019-09-26 08:18:46
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$eventBus = new Vue();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
