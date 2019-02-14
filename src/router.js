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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        animate: 'slide-left',
        title: '首页',
      }
    }, {
      path: '/components',
      name: 'components',
      component: () => import( /* webpackChunkName: "about" */ './views/Components.vue'),
      meta: {
        animate: 'slide-left',
        title: '首页',
      }
    }, {
      path: '/plugin',
      name: 'plugin',
      component: () => import( /* webpackChunkName: "about" */ './views/Plugin.vue'),
      meta: {
        animate: 'slide-right',
        title: '首页',
      }
    }, {
       path: '/layout',
       name: 'layout',
       component: () => import( /* webpackChunkName: "about" */ './ui/Layout.vue'),
       meta: {
         animate: 'slide-right',
         title: '布局',
       }
     }, {
       path: '/background',
       name: 'background',
       component: () => import( /* webpackChunkName: "about" */ './ui/Backgroud.vue'),
       meta: {
         animate: 'slide-right',
         title: '背景',
       }
     }, {
      path: '/text',
      name: 'text',
      component: () => import( /* webpackChunkName: "about" */ './ui/Text.vue'),
      meta: {
        animate: 'slide-right',
        title: '背景',
      }
    }, {
      path: '/icon',
      name: 'icon',
      component: () => import( /* webpackChunkName: "about" */ './ui/Icon.vue'),
      meta: {
        animate: 'slide-right',
        title: '图标',
      }
    }, {
      path: '/icon',
      name: 'icon',
      component: () => import( /* webpackChunkName: "about" */ './ui/Icon.vue'),
      meta: {
        animate: 'slide-right',
        title: '图标',
      }
    }, {
      path: '/button',
      name: 'button',
      component: () => import( /* webpackChunkName: "about" */ './ui/Button.vue'),
      meta: {
        animate: 'slide-right',
        title: '按钮',
      }
    }, {
      path: '/tag',
      name: 'tag',
      component: () => import( /* webpackChunkName: "about" */ './ui/Tag.vue'),
      meta: {
        animate: 'slide-right',
        title: '标签',
      }
    }, {
      path: '/avatar',
      name: 'avatar',
      component: () => import( /* webpackChunkName: "about" */ './ui/Avatar.vue'),
      meta: {
        animate: 'slide-right',
        title: '头像',
      }
    }, {
      path: '/progress',
      name: 'progress',
      component: () => import( /* webpackChunkName: "about" */ './ui/Progress.vue'),
      meta: {
        animate: 'slide-right',
        title: '进度条',
      }
    }, {
      path: '/shadow',
      name: 'shadow',
      component: () => import( /* webpackChunkName: "about" */ './ui/Shadow.vue'),
      meta: {
        animate: 'slide-right',
        title: '阴影',
      }
    }, {
      path: '/loading',
      name: 'loading',
      component: () => import( /* webpackChunkName: "about" */ './ui/Loading.vue'),
      meta: {
        animate: 'slide-right',
        title: '加载',
      }
    }
  ]
})
