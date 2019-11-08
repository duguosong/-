import Vue from "vue"

import VueRouter from "vue-router"

import Home from "../views/Home/index.vue"

import Information from "../views/Limit/Information.vue"
import Search from "../views/Limit/Search.vue"
import Number from "../views/Limit/Number.vue"

import Protol from "../views/Limit/Protol.vue"
import Protol_name from "../views/Limit/Protol_name"
import Discover from "../views/Discover/index.vue"
import NewsOne from "../views/Discover/NewsOne.vue"
import NewsTwo from "../views/Discover/NewsTwo.vue"
import NewsThree from "../views/Discover/NewsThree.vue"
import NewsFour from "../views/Discover/NewsFour.vue"
import NewsFive from "../views/Discover/NewsFive.vue"
import NewsSix from "../views/Discover/NewsSix.vue"

import { getToken } from "../utils/auth" //获取token

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

    component: () => import("@/views/Home/message"),
    meta: {
      needLoginIn: true
    }
  },
  // 列表
  // {
  //   path: "/newPhone/:product_category/:descriptions",
  //   name: "NewPhone",
  //   component: () => import("@/views/Home/newPhone")
  // },

  // {
  //   path: "/limit",

  //   name: "Limit",

  //   component: () => import("@/views/Limit/index")
  // },
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
    //额度 个人信息使用授权书
    path: "/limit/information",
    name: "Information",
    component: () => import("@/views/Limit/Information")
  },
  {
    //额度 个人征信查询授权书
    path: "/limit/search",
    name: "Search",
    component: () => import("@/views/Limit/Search")
  },
  {
    //额度 数字证书服务协议
    path: "/limit/number",
    name: "Number",
    component: () => import("@/views/Limit/Number")
  },
  {
    path: "/task",
    name: "Task",
    component: () => import("@/views/Task/index"),
    meta: {
      needLoginIn: true
    }
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
    // 发现
    path: "/discover",
    name: "Discover",
    component: () => import("@/views/Discover/index")
  },
  {
    // 发现 第1条新闻页面
    path: "/discover/newsone",
    name: "NewsOne",
    component: () => import("@/views/Discover/NewsOne"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 发现 第2条新闻页面
    path: "/discover/newstwo",
    name: "NewsTwo",
    component: () => import("@/views/Discover/NewsTwo"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 发现 第3条新闻页面
    path: "/discover/newsthree",
    name: "NewsThree",
    component: () => import("@/views/Discover/NewsThree"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 发现 第4条新闻页面
    path: "/discover/newsfour",
    name: "NewsFour",
    component: () => import("@/views/Discover/NewsFour"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 发现 第5条新闻页面
    path: "/discover/newsfive",
    name: "NewsFive",
    component: () => import("@/views/Discover/NewsFive"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 发现 第6条新闻页面
    path: "/discover/newssix",
    name: "NewsSix",
    component: () => import("@/views/Discover/NewsSix"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 登录
    path: "/login",

    name: "Login",
    component: () => import("@/views/Login/index")
  },
  ,
  {
    // 登录
    path: "/reg",

    name: "Reg",

    component: () => import("@/views/Login/reg")
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
    component: () => import("@/views/User/orders/index"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 我的 -> 提交订单
    path: "/submitOrder",
    name: "submitOrder",
    component: () => import("@/views/User/orders/submitOrder"),
    meta: {
      needLoginIn: true
    }
  },
  // {
  //   // 我的 -> 我的账单
  //   path: "/user/bill",
  //   //  name: "Bill",
  //   // redirect: "/user/bill/allBill",
  //   component: () => import("@/views/User/bill/index"),
  //   children: [
  //     {
  //       //  我的账单 -> 全部账单
  //       path: "",
  //       name: "AllBill",
  //       component: () => import("@/views/User/bill/allBill")
  //     },
  //     {
  //       //  我的账单 -> 待还账单
  //       path: "daiHBill",
  //       name: "DaiHBill",
  //       component: () => import("@/views/User/bill/daiHuanBill")
  //     },
  //     {
  //       // 我的账单 -> 已还账单
  //       path: "yiHBill",
  //       name: "YiHBill",
  //       component: () => import("@/views/User/bill/yiHuanBill")
  //     }
  //   ]
  // },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/User/Cart/index"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 我的 ->  售后

    path: "/user/afterSale",

    name: "afterSale",

    component: () => import("@/views/User/afterSale/index"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 我的 ->  我的收藏

    path: "/user/collect",

    name: "Collect",

    component: () => import("@/views/User/collect/index"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 我的 -> 收货地址管理

    path: "/user/address:goSubOrder",

    name: "Address",

    component: () => import("@/views/User/address/index"),
    // 需要登陆才可以进入该页面 Lxh0223
    meta: {
      needLoginIn: true
    }
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
    //name: "redPack",
    component: () => import("@/views/User/redPack/index"),

    children: [
      {
        // 我的红包-> 未使用
        path: "",
        name: "Unused",
        component: () => import("@/views/User/redPack/unused"),
        meta: {
          needLoginIn: true
        }
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
    component: () => import("@/views/User/feedback/index"),
    meta: {
      needLoginIn: true
    }
  },
  {
    // 详情
    path: "/detail/:id",

    name: "Detail",

    component: () => import("@/views/Detail/detail")
  },

  // 分类
  {
    path: "/fenlei/index/:product_category/:descriptions",
    //name: "NewPhone",
    //redirect: "fenlei/index/:product_category/:descriptions/hot", // redirect重定向 当访问/fenlei默认跳转到hot页
    component: () => import("@/views/Fenlei/index"),
    children: [
      {
        path: "",
        name: "Hot",
        component: () => import("@/views/Fenlei/hot"),
        meta: { title: "商品列表", icon: "tree" }
      },
      {
        path: "jiezhi/:name",
        name: "Jiezhi",
        component: () => import("@/views/Fenlei/jiezhi"),
        meta: { title: "商品新增", icon: "tree" }
      },
      {
        path: "shoulian/:name",
        name: "Shouzhuo",
        component: () => import("@/views/Fenlei/shouzhuo")
        // meta: { title: '商品新增', icon: 'tree' }
      },
      {
        path: "xianglian/:name",
        name: "Xianglian",
        component: () => import("@/views/Fenlei/xianglian")
        // meta: { title: '商品新增', icon: 'tree' }
      },
      {
        path: "zhuanyunzhu/:name",
        name: "Zhuanyunzhu",
        component: () => import("@/views/Fenlei/zhuanyunzhu")
        // meta: { title: '商品新增', icon: 'tree' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // next()

  console.log(1)
  if (to.meta.needLoginIn) {
    if (getToken() || localStorage.getItem("token")) {
      next()
    } else {
      console.log(1)
      next({ name: "Login" })
    }
  } else {
    next()
  }
})

export default router
