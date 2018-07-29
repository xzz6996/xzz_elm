<template>
    <div id="a">
      <div @click="show"></div>
    </div>
</template>

<script>
  let hub=new Vue;
    export default {
        name: "a",
      methods:{
          show(){
            this.$emit('change','datas');
          }
      }
    }
</script>

<style scoped>

</style>
