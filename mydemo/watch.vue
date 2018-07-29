<template>
    <div id="watch-example">
      查询
      <input type="text" v-model="question">
      <p>{{answer}}</p>
    </div>
</template>

<script>
    export default {
        name: "watch",
        data(){
          return{
            question:"",
            answer:""
          }
        },
        watch:{

        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
