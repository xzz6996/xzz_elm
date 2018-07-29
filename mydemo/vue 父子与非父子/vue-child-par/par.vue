<template>
    <div>
      this is 父组建
      <child :value1="value"></child>
    </div>
</template>

<script>
  import child from 'wxwxwx/test/vue 父子与非父子/vue-child-par/child'
    export default {
        name: "par",
      components:{
          child
      },
      data(){
          return{
            value:"1111111111111111"
          }
      }
    }
</script>

<style scoped>

</style>
