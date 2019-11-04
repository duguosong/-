import Vue from "vue"
import Vant from "vant"
import "vant/lib/index.css"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./assets/icon/iconfont.css" //字体图标引入

import { PullRefresh } from "vant" //下拉刷新

import "./assets/common.js" //自适应引入
import "./assets/common.css" //自适应引入

Vue.use(Vant)
Vue.use(PullRefresh) //下拉刷新
// 轻提示
import { Toast } from "vant"
Vue.use(Toast)
//  Lazyload 是 Vue 指令，使用前需要对指令进行注册 图片使用懒加载
import { Lazyload } from "vant"
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
