import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import( /* webpackChunkName: "about" */ './views/Home.vue'),
      meta: {
        animate: 'slide-right',
        title: '首页',
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        animate: 'slide-left',
        title: '首页',
      }
    }, {
      path: '/components',
      name: 'components',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Components.vue'),
      meta: {
        animate: 'slide-left',
        title: '首页',
      }
    }, {
      path: '/plugin',
      name: 'plugin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Plugin.vue'),
      meta: {
        animate: 'slide-right',
        title: '首页',
      }
    }, {
       path: '/layout',
       name: 'layout',
       // route level code-splitting
       // this generates a separate chunk (about.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () => import( /* webpackChunkName: "about" */ './ui/Layout.vue'),
       meta: {
         animate: 'slide-right',
         title: '布局',
       }
     }, {
       path: '/background',
       name: 'background',
       // route level code-splitting
       // this generates a separate chunk (about.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () => import( /* webpackChunkName: "about" */ './ui/Backgroud.vue'),
       meta: {
         animate: 'slide-right',
         title: '背景',
       }
     }
  ]
})
