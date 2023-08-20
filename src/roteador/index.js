import Vue from 'vue'
import VueRouter from 'vue-router'
import Lista from '@/pags/yeyezados.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lista',
    component: Lista
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
