import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Realname from '../views/Limit/Realname.vue'
import Cart from '../views/Limit/Cart.vue'
import Information from '../views/Limit/Information.vue'
import Accredit from '../views/Limit/Accredit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/limit',
    name: 'Limit',
    component: () => import('@/views/Limit/index'),
    children: [
      {
        path: '/limit/realname',
        name: 'Realname',
        component: Realname
      },
      {
        path: '/limit/cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/limit/information',
        name: 'Information',
        component: Information
      },
      {
        path: '/limit/accredit',
        name: 'Accredit',
        component: Accredit
      }
    ]
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('@/views/Task/index')
  },
  {
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
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index')
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
