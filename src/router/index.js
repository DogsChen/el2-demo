import Vue from 'vue'
import VueRouter from 'vue-router' 

Vue.use(VueRouter)

const routes = [

  {
    path: '/07-datepicker',
    name: '07-datepicker',
    component:  function () {
          return import('@/views/202312/07-datepicker.vue')
        }
  }, 
  {
    path: '/13-eltree',
    name: '13-eltree',
    component:  function () {
          return import('@/views/202312/13-eltree.vue')
        }
  }, 
  {
    path: '/',
    name: 'home',
    // redirect:'home'
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
