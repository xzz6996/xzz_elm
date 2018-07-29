// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import qs from  'qs'
Vue.prototype.$QS=qs;


Vue.config.productionTip = false


Vue.prototype.setToken=function (tokenName,tokenValue) {
  if(window.localStorage){
    localStorage.setItem(tokenName,tokenValue);
  }else{
    alert("this borrow is not support localStorage");
  }
}

Vue.prototype.getToken=function (name) {
  var token=localStorage.getItem(name);
  if(token){
    return token;
  }else{
    return '';
  }
}


router.beforeEach((to, from, next) => {
//设置延时器让created先执行在进行路由跳转
  setTimeout((res) => {
    // 判断该路由是否需要登录权限 to.meta.requireAuth
    if (to.matched.some(record => record.meta.requireAuth)) {
      // 通过vuex state获取当前的状态是否存在
      if (store.state.isLogin) {
        next();
      } else {
        next({
          path: '/login',
          query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    } else {
      next();
    }
  }, 100);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
