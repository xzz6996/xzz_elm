import api from '../../api/interface'
import * as types from '../mutation-types'


const state={
  novelList:[],
  meituList:[]
}

const actions={
  getNovel({state,commit}){
    api.novel().then(res=>{
      commit(types.SET_NOVEL_LIST,res);
    });
  },
  getMeituList({state,commit},meituPage){
    api.meitu(meituPage).then(res=>{
      commit(types.SET_MEITU_LIST,res)
    })
  }
}

const mutations={
  [types.SET_NOVEL_LIST](state,data){
    state.novelList=data;
  },
  [types.SET_MEITU_LIST](state,data){
    state.meituList=data;
  }
}

const getters={
  getNovels(state){
    return state.novelList;
  },
  getMeituLists(state){
    return state.meituList;
  }
}

export default{
  state,
  actions,
  mutations,
  getters
}
