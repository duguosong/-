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

    component: () => import('@/components/Protocol')
  },

  {
    // 我的 跳转到  设置

    path: '/Setting',

    name: 'Setting',

    component: () => import('@/views/User/Setting')
  },

  // {

  //   path: '/about',

  //   name: 'about',

  //   // route level code-splitting

  //   // this generates a separate chunk (about.[hash].js) for this route

  //   // which is lazy-loaded when the route is visited.

  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  // },
  {
    // 详情
    path: '/detail/:id',

    name: 'Detail',

    component: () => import('@/views/Detail/detail')
  }
]

const router = new VueRouter({
  routes
})

export default router
