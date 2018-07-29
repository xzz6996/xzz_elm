<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  methods:{
  },
  created(){
    if(this.getToken('isLogin')==null){
      this.setToken('isLogin','');
    }
    this.$store.state.isLogin=this.getToken('isLogin');
  }
}
</script>

<style lang="scss">
  @import "style/common.scss";
  @import "style/mixin.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
