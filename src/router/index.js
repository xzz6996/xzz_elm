import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import login from '../components/login/login'
import home from '../components/home/index'
import novel from '../components/novel/novel'


const detail =resolve =>require(['../components/detail/detail'],resolve);
const shop =resolve =>require(['../../test/shop/shop'],resolve)

Vue.use(Router)

export default new Router({
  mode:"history",
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: "/novel",
      name: 'novel',
      component(resolve) {
        require(['../components/novel/novel.vue'], resolve)
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component:detail,
      meta:{
        requireAuth:true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/meitu',
      name: 'meitu',
      component:resolve => require(['../components/meitu/meitu'],resolve)
    },
    {
      path:'/shop',
      name:'shop',
      component:shop
    }
  ]
})
