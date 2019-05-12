import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Base',
      redirect: 'Index',
      component: resolve => require(['@/views/Base'], resolve),
      children: [
        {
          name: 'Index',
          path: '/index',
          component: resolve => require(['@/views/Home'], resolve)
        },
        {
          name: 'About',
          path: '/about',
          component: resolve => require(['@/views/About'], resolve)
        },
        {
          name: 'Store',
          path: '/store',
          component: resolve => require(['@/views/Store'], resolve)
        },
        {
          name: 'Brand',
          path: '/brand',
          component: resolve => require(['@/views/Brand'], resolve)
        },
        {
          name: 'CallMe',
          path: '/call_me',
          component: resolve => require(['@/views/CallMe'], resolve)
        }
      ]
    }
  ]
})
