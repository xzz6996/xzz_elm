<template>
    <div id="child">
      {{this.value1}}
    </div>
</template>

<script>
    export default {
        name: "child",
      props:{
          value1:{
            type:String
          }
      }
    }
</script>

<style scoped>

</style>
