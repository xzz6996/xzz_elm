import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('../components/HelloWorld')
const good = () => import('../components/good/good')
import App from '../App'
import seller from '../components/seller/seller'
import rating from '../components/rating/rating'


Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      component:App
    },
    {
          path: '/good',
          name: 'good',
          component: good
        },
        {
          path: '/seller',
          name: 'seller',
          component: seller
        },
        {
          path: '/rating',
          name: 'rating',
          component: rating
        },
      {
        path: '/helloworld',
        name: 'HelloWorld',
        component: HelloWorld
      }
  ]
})

