import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import vCatalog from '@/components/catalog/v-catalog.vue'
import Catalog from '../views/Catalog.vue'
import Card from '../views/Card.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {layout: 'login'}
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {layout: 'content'}
  },
  {
    path: '/catalog',
    component: Catalog,
    children: [
      {
        path: '',
        name: 'catalog',
        component: vCatalog,
        meta: {layout: 'content'}
      },
      {
        path: ':id',
        name: 'card',
        component: Card,
        meta: {layout: 'content'}
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {layout: 'content'}

  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/Contacts.vue'),
    meta: {layout: 'content'}
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('../views/Basket.vue'),
    meta: {layout: 'content'}
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta: {layout: 'content'}
  },
  {
    path: '/error',
    alias: '*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue'),
    meta: {layout: 'content'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
