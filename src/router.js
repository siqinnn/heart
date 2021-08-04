import Vue from 'vue'
import Router from 'vue-router';
import RoutePage from './views/html'
import child1 from '@/components/allchild/child1';
import child2 from '@/components/allchild/child2';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '',
      name: 'html ',
      component: RoutePage,
      children: []
    },
    {
      path: '/vue',
      name: 'vue',
      component: () => import('./views/vue.vue'),
      //二级路由
      children: [
        {
          path: 'child1',
          name: 'child1',
          component: child1
        },{
          path: 'child2',
          name: 'child2',
          component:child2
        },
        {
          path: '/web',
          name: 'web',
          redirect: 'film'
        }, //配置默认显示模板内容
        {
          path: '/film',
          name: 'film',
          component: () => import('./views/twice/neirong/film.vue'),

        },
        {
          path: '/tv',
          name: 'tv',
          component: () => import('./views/twice/neirong/tv.vue'),
        },
        {
          path: '/music',
          name: 'music',
          component: () => import('./views/twice/neirong/music.vue'),
          //三级路由
          children: [{
              path: '/let',
              name: 'let',
              component: () => import('./views/twice/neirong/three/let.vue'),
            },
            {
              path: '/var',
              name: 'var',
              component: () => import('./views/twice/neirong/three/var.vue'),
            }
          ]
        }
      ]
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('./views/css.vue')
    },
    {
      path: '/js',
      name: 'js',
      component: () => import('./views/js.vue')
    },
    {
      path: '/html',
      name: 'html',
      component: () => import('./views/html.vue')
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('./components/practice.vue')
    },
    {
      path: '/',
      name: 'echarsgr',
      component: () => import('./components/echarsgr.vue')
    },
    {
      path: '/GluttonousSnake',
      name: 'GluttonousSnake',
      component: () => import('./components/GluttonousSnake.vue')
    },
  ]
})