<template>
  <div>
    <h1>free api for work</h1>
    <router-link tag="a" to="/novel">热门小说推荐列表 </router-link>
    <router-link tag="a" to="/meitu">美图获取</router-link>
    <footers></footers>
  </div>
</template>

<script>
  import footers from '../../common/footer/footer'
    export default {
      name: "index",
      components:{
        footers
      },
      created(){
        this.test();
      },
      methods:{
        test(){
          var x=this.$route.matched;
          console.log(x)
        }
      }
    }
</script>

<style lang="scss" scoped>
  a{
    margin: 30px auto;
    display: block;
  }
</style>
