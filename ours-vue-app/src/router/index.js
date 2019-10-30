import Vue from "vue"

import VueRouter from "vue-router"

import Home from "../views/Home/index.vue"

import Cart from "../views/Limit/Cart.vue"

import Information from "../views/Limit/Information.vue"

import Accredit from "../views/Limit/Accredit.vue"
import Protol from "../views/Limit/Protol.vue"
import Protol_name from "../views/Limit/Protol_name"
import Discover from "../views/Discover/index.vue"
import NewsOne from "../views/Discover/NewsOne.vue"
import NewsTwo from "../views/Discover/NewsTwo.vue"
import NewsThree from "../views/Discover/NewsThree.vue"
import NewsFour from "../views/Discover/NewsFour.vue"
import NewsFive from "../views/Discover/NewsFive.vue"
import NewsSix from "../views/Discover/NewsSix.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",

    name: "home",

    component: Home
  },
  {
    path: "/message",

    name: "Message",

    component: () => import("@/views/Home/message")
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
  {
    path: "/task",

    name: "Task",

    component: () => import("@/views/Task/index")
  },

  {
    // 我的
    path: "/user",

    name: "User",

    component: () => import("@/views/User/index")
  },

  {
    // 发现
    path: "/discover",
    name: "Discover",
    component: () => import("@/views/Discover/index")
  },
  {
    // 发现 第1条新闻页面
    path: "/discover/newsone",
    name: "NewsOne",
    component: () => import("@/views/Discover/NewsOne")
  },
  {
    // 发现 第2条新闻页面
    path: "/discover/newstwo",
    name: "NewsTwo",
    component: () => import("@/views/Discover/NewsTwo")
  },
  {
    // 发现 第3条新闻页面
    path: "/discover/newsthree",
    name: "NewsThree",
    component: () => import("@/views/Discover/NewsThree")
  },
  {
    // 发现 第4条新闻页面
    path: "/discover/newsfour",
    name: "NewsFour",
    component: () => import("@/views/Discover/NewsFour")
  },
  {
    // 发现 第5条新闻页面
    path: "/discover/newsfive",
    name: "NewsFive",
    component: () => import("@/views/Discover/NewsFive")
  },
  {
    // 发现 第6条新闻页面
    path: "/discover/newssix",
    name: "NewsSix",
    component: () => import("@/views/Discover/NewsSix")
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
    path: "/user/orders/:id",
    name: "Orders",
    component: () => import("@/views/User/orders/index")
  },
  {
    // 我的 -> 我的账单
    path: "/user/bill",
    //  name: "Bill",
    // redirect: "/user/bill/allBill",
    component: () => import("@/views/User/bill/index"),
    children: [
      {
        //  我的账单 -> 全部账单
        path: "",
        name: "AllBill",
        component: () => import("@/views/User/bill/allBill")
      },
      {
        //  我的账单 -> 待还账单
        path: "daiHBill",
        name: "DaiHBill",
        component: () => import("@/views/User/bill/daiHuanBill")
      },
      {
        // 我的账单 -> 已还账单
        path: "yiHBill",
        name: "YiHBill",
        component: () => import("@/views/User/bill/yiHuanBill")
      }
    ]
  },
  {
    // 我的 ->  售后

    path: "/user/afterSale",

    name: "afterSale",

    component: () => import("@/views/User/afterSale/index")
  },
  {
    // 我的 ->  我的收藏

    path: "/user/collect",

    name: "Collect",

    component: () => import("@/views/User/collect/index")
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

    name: "addAddress",
    component: () => import("@/views/User/address/addAddress")
  },
  {
    // 我的 -> 红包
    path: "/user/redPack",
    component: () => import("@/views/User/redPack/index"),
    children: [
      {
        // 我的红包-> 未使用
        path: "",
        name: "Unused",
        component: () => import("@/views/User/redPack/unused")
      },
      {
        // 我的红包 -> 已使用
        path: "used",
        name: "Used",
        component: () => import("@/views/User/redPack/used")
      },
      {
        // 我的红包 -> 已过期
        path: "expired",
        name: "Expired",
        component: () => import("@/views/User/redPack/expired")
      }
    ]
  },
  {
    // 我的 -> 意见反馈
    path: "/user/feedback",
    name: "Feedback",
    component: () => import("@/views/User/feedback/index")
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
