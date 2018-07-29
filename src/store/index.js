import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import * as types from './mutation-types'


Vue.use(Vuex)


const state={
  isLogin :"",//登录状态，默认为''，当登录成功后自动再更新状态
  phone:''
}

const getters={
  login(state){
    return state.isLogin
  }
}

const mutations={
  [types.LOGIN](state,msg){
    //state.isLogin=msg.token;
    state.phone=msg.phone;
    //this.setToken('isLogin',msg.token);
  },
  [types.REGISTE](state,msg){

  }
}

const actions={
  loginAction({commit,state},userInfo){
      //commit(types.LOGIN,res);
      //this.setToken('token', token)
      //设置本地存储及vuex仓库中islogin的状态值
      //this.setToken('isLogin',100);
      //commit('isLogin',100);
  },
  registeAction({commit,state},userInfo){

  }
}



export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules:{
    list
  }
})
