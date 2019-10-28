import Vue from 'vue'

import VueRouter from 'vue-router'

import Home from '../views/Home/index.vue'

import Cart from '../views/Limit/Cart.vue'

import Information from '../views/Limit/Information.vue'

import Accredit from '../views/Limit/Accredit.vue'
import Protol from '../views/Limit/Protol.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',

    name: 'home',

    component: Home
  },
  {
    path: '/message',

    name: 'Message',

    component: () => import('@/views/Home/message')
  },

  {
    path: '/limit',

    name: 'Limit',

    component: () => import('@/views/Limit/index')
  },
  {
    //协议
    path: '/protol',
    name: 'protol',
    component: Protol
  },
  {
    //额度
    path: '/limit',
    name: 'Limit',
    component: () => import('@/views/Limit/index')
  },
  {
    path: '/task',

    name: 'Task',

    component: () => import('@/views/Task/index')
  },

  {
    // 我的
    path: '/user',

    name: 'User',

    component: () => import('@/views/User/index')
  },

  {
    path: '/discover',

    name: 'Discover',

    component: () => import('@/views/Discover/index')
  },

  {
    // 登录
    path: '/login',

    name: 'Login',

    component: () => import('@/views/Login/index')
  },

  {
    // 登录 跳转到 服务协议

    path: '/protocol',

    name: 'Protocol',

    component: () => import('@/views/Login/Protocol')
  },

  {
    // 我的 跳转到  设置

    path: '/user/Setting',

    name: 'Setting',

    component: () => import('@/views/User/Setting/Setting')
  },
  {
    // 设置 -> 修改密码页面
    path: '/user/Setting/changePassword',

    name: 'changePassword',

    component: () => import('@/views/User/Setting/changePassword')
  },
  {
    // 设置 -> 关于我们
    path: '/user/Setting/aboutUs',

    name: 'aboutUs',

    component: () => import('@/views/User/Setting/aboutUs')
  },
  {
    // 我的 -> 我的订单
    path: '/user/orders',
    name: 'Orders',
    component: () => import('@/views/User/orders/index')
  },
  {
    // 我的 -> 收货地址管理

    path: '/user/address',

    name: 'Address',

    component: () => import('@/views/User/address/index')
  },
  {
    // 收货地址管理 -> 添加收货地址

    path: '/user/address/addAddress',

    name: 'addAddress',

    component: () => import('@/views/User/address/addAddress')
  }
]

const router = new VueRouter({
  routes
})

export default router
