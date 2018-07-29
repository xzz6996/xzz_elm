/*import axios from 'axios'
import store from './store'


let cancel;
const CancelToken = axios.CancelToken;

var server=axios.create({
  baseURL:"https://www.apiopen.top",   //基础url
  timeout:5000, //响应时间
  headers:{     //请求头参数
    'Content-Type':"application/x-www-form-urlencoded"
  },
  data:{},    //参数
  withCredentials:"true", //携带凭证 默认为false
  responseType:"json" , //返回数据库类型
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],
  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
    proxy: {
      host: '127.0.0.1',
      port: 9000,
      auth: {
      'username': '',
      'password': ''
      }
  }

})

export default function $axios() {

  //添加请求拦截器
    server.interceptors.request.use(config=>{
        if(store.getters.token){
          config.headers.Authorization =localStorage.token;
         // config.headers['TOKEN']=Vue.getToken['TOKEN'];
        }
      }
    )
  // 添加响应拦截器




  export default{
    //get
    get(url,param){
      return promise((resolve,reject)=>{
        server({
          method:"get",
          url:url,
          param:param,
          cancelToken:new CancelToken(c=>{
            cancel=c;
          })
        }).then(res=>{
          resolve(res)
        }).catch(err=>{
          console.log(err)
        })
      })
    },

    //post
    post(url,param){
      return promise((resolve,reject)=>{
        server({
          method:"post",
          url:url,
          param:param,
          cancelToken:new CancelToken(c=>{
            cancel=c;
          })
        }).then(res=>{
          resolve(res)
        }).catch(err=>{
          console.log(err)
        })
      })
    }



  }


}
*/
import axios from 'axios';
//import { Message } from 'element-ui';

axios.defaults.timeout = 5000; //超时终止请求
axios.defaults.baseURL ='https://www.apiopen.top';

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode ==2){
      router.push({
        path:"/login",
        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    /*Message({
      Message:error.message,
      type:'error',
      duration:5*1000
    });*/
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}
