<template>
    <div>
      this is 父组建
      <child @show="showme"></child>
    </div>
</template>

<script>
  import child from 'wxwxwx/test/vue 父子与非父子/vue-par-child/child'
    export default {
        name: "par",
      components:{
          child
      },
      data(){
          return{
            value:"1111111111111111"
          }
      },
      methods:{
        showme(datas){
          console.log(datas)
        }
      }
    }
</script>

<style scoped>

</style>
