import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/picturequiz',
    name: 'PictureQuiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PictureQuiz.vue')
  },
  {
    path: '/initialquiz',
    name: 'InitialQuiz',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/InitialQuiz.vue')
  },
  {
    path: '/previousConcepts',
    name: 'PreviousConcepts',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/PreviousConcepts.vue')
  },
  {
    path: '/previousConceptsQuiz',
    name: 'PreviousConceptsQuiz',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/PreviousConceptsQuiz.vue')
  },
  {
    path: '/finalquiz',
    name: 'FinalQuiz',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/FinalQuiz.vue')
  },
  {
    path: 'https://forms.gle/QQDx4c3p17aD4CS87',
    name: 'google_form',


  }
]

const router = new VueRouter({
  routes
})

export default router
