<template>
    <div id="b">

    </div>
</template>

<script>
  let hub = new Vue();
    export default {
        name: "b",
        created(){
          hub.$on('chaneg',()=>{
            this.msg='datas';
          })
        }
    }
</script>

<style scoped>

</style>
