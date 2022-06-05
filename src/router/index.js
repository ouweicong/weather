import Vue from 'vue'
import VueRouter from 'vue-router'
import weather from '../views/weather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: weather
  },
  {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/news.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
