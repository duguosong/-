import Vue from "vue"

import VueRouter from "vue-router"

import Home from "../views/Home/index.vue"

import Cart from "../views/Limit/Cart.vue"

import Information from "../views/Limit/Information.vue"

import Accredit from "../views/Limit/Accredit.vue"
import Protol from "../views/Limit/Protol.vue"
import Protol_name from "../views/Limit/Protol_name"

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: "/",

    name: "home",

    component: Home
  },
  // 消息
  {
    path: "/message",

    name: "Message",

    component: () => import("@/views/Home/message")
  },
  // 列表
  {
    path: "/newPhone/:product_category/:descriptions",
    name: "NewPhone",
    component: () => import("@/views/Home/newPhone")
  },

  {
    path: "/limit",

    name: "Limit",

    component: () => import("@/views/Limit/index")
  },
  {
    //额度协议
    path: "/protol",
    name: "protol",
    component: Protol
  },
  {
    //额度
    path: "/limit",
    name: "Limit",
    component: () => import("@/views/Limit/index")
  },
  {
    //额度同意协议后，跳转至实名拍照认证
    path: "/protol_name",
    name: "Protol_name",
    component: Protol_name
  },
  // 任务
  {
    path: "/task",
    name: "Task",
    component: () => import("@/views/Task/index")
  },
  {
    // 任务 -> 活动协议页面
    path: "/huodong",
    name: "huodong",
    component: () => import("@/views/Task/huodong")
  },

  {
    // 我的
    path: "/user",

    name: "User",

    component: () => import("@/views/User/index")
  },

  {
    path: "/discover",

    name: "Discover",

    component: () => import("@/views/Discover/index")
  },

  {
    // 登录
    path: "/login",

    name: "Login",

    component: () => import("@/views/Login/index")
  },

  {
    // 登录 跳转到 服务协议

    path: "/protocol",

    name: "Protocol",

    component: () => import("@/views/Login/Protocol")
  },

  {
    // 我的 跳转到  设置

    path: "/user/Setting",

    name: "Setting",

    component: () => import("@/views/User/Setting/Setting")
  },
  {
    // 设置 -> 修改密码页面
    path: "/user/Setting/changePassword",

    name: "changePassword",

    component: () => import("@/views/User/Setting/changePassword")
  },
  {
    // 设置 -> 关于我们
    path: "/user/Setting/aboutUs",

    name: "aboutUs",

    component: () => import("@/views/User/Setting/aboutUs")
  },
  {
    // 我的 -> 我的订单
    path: "/user/orders",
    name: "Orders",
    component: () => import("@/views/User/orders/index")
  },
  {
    // 我的 -> 收货地址管理

    path: "/user/address",

    name: "Address",

    component: () => import("@/views/User/address/index")
  },
  {
    // 收货地址管理 -> 添加收货地址

    path: "/user/address/addAddress",

    name: "addAddress"
  },
  {
    // 详情
    path: "/detail/:id",

    name: "Detail",

    component: () => import("@/views/Detail/detail")
  }
]

const router = new VueRouter({
  routes
})

export default router
