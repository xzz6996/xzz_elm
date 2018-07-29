import {fetch} from './index'
import {post} from './index'
export default {
 login(params){
   return fetch('/login',params);
 },
  novel(params){
    return fetch('/novelApi',params)
  },
  registe(params){
    return fetch('/createUser',params);
  },
  meitu(params){
    return fetch('/meituApi',params)
  }
}
