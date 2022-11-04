import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/registerComponent.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomePage.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router