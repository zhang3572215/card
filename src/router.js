import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'user',
      component: resolve => require(['./views/user'],resolve) 
    }, 
    {
      path: '/change',
      name: 'change',
      component: resolve => require(['./views/change'],resolve) 
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['./views/home'],resolve) 
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: resolve => require(['./views/wallet'],resolve) 
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: resolve => require(['./views/recharge'],resolve) 
    },
    {
      path: '/set-meals',
      name: 'set-meals',
      component: resolve => require(['./views/set-meals'],resolve) 
    }
  ]
})
