<template>
    <div>
      <!-- <router-link v-for="item in list" :to="{path:item.url,query:{id:item.id}}"></router-link> -->
    </div>
</template>

<script>
    export default {
        name: "router-params",
        data(){
          return{
            list:[
              {
                id:"1",
                url:'/test'
              },
              {
                id:"2",
                url:'/test'
              },
              {
                id:"3",
                url:'/test'
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
