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
    //首页
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: 'message',
    name: 'Message',
    component: () => import('@/views/Home/message')
  },
  {
    //额度
    path: '/limit',
    name: 'Limit',
    component: () => import('@/views/Limit/index')
  },
  {
    //任务
    path: '/task',
    name: 'Task',
    component: () => import('@/views/Task/index')
  },
  {
    //用户
    path: '/user',
    name: 'User',
    component: () => import('@/views/User/index')
  },
  {
    //发现
    path: '/discover',
    name: 'Discover',
    component: () => import('@/views/Discover/index')
  },
  {
    //发现
    path: '/protol',
    name: 'protol',
    component: Protol
  }
]

const router = new VueRouter({
  routes
})

export default router
