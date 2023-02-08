import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "homeview" */ '../views/home.vue')
  // },
  {
    path: '/English',
    name: 'english',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    omponent: () => import(/* webpackChunkName: "indonesia" */ '../views/content.vue')
  },
  {
    path: '/Vietnamese',
    name: 'vietnamese',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    omponent: () => import(/* webpackChunkName: "indonesia" */ '../views/content.vue')
  },
  {
    path: '/Indonesian',
    name: 'indonesian',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "indonesia" */ '../views/content.vue')
  },
  {
    path: '/Arabic',
    name: 'arabic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    omponent: () => import(/* webpackChunkName: "indonesia" */ '../views/content.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
