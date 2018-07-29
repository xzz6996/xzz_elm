


// 1 vue 异步组件技术  vue-router配置路由，使用vue的异步组件技术，可以实现按需加载
{
  path:"/test",
  name:"test",
  component:resolve => require(['../../components/test'],resolve)
}
缺点 一个组件生成一个js文件




//2 webpack require.ensure()  第3个参数 chunk
{
  path:"/test",
  name:"test",
  component:resolve => require.ensure([],()=>resolve(require('../../components/test')),'demo')
}

(按组分块)
const test = r = require.ensure([],()=>r(require('../../component/test')),'demo')


function (r){
  require.ensure
}

优点 多个路由指定相同的chunkName，会合并打包成一个js文件。




//3 es import()
const test = () =>import('../../components/test')

// 下面2行代码，没有指定webpackChunkName，每个组件打包成一个js文件。
const ImportFuncDemo1 = () => import('../components/ImportFuncDemo1')
const ImportFuncDemo2 = () => import('../components/ImportFuncDemo2')
// 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件。
// const ImportFuncDemo = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../components/ImportFuncDemo')
// const ImportFuncDemo2 = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../components/ImportFuncDemo2')
export default new Router({
    routes: [
        {
            path: '/importfuncdemo1',
            name: 'ImportFuncDemo1',
            component: ImportFuncDemo1
        },
        {
            path: '/importfuncdemo2',
            name: 'ImportFuncDemo2',
            component: ImportFuncDemo2
        }
    ]
})
