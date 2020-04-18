import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Editor from '@/views/Editor'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/editor/:id',
    component: Editor,
    props: route => ({id: route.params.id})
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new VueRouter({
  routes
})
