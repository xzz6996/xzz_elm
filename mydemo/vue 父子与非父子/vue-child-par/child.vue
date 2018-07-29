<template>
    <div id="child">
      <div @click="toUp"></div>
    </div>
</template>

<script>
    export default {
        name: "child",
     methods:{
       toUp(){
         this.$emit(show,'datas')
       }
     }
    }
</script>

<style scoped>

</style>
