<template>
    <div class="footers">
      <ul>
          <router-link  to="/home" tag="li">首页</router-link>
           <router-link  to="/detail" tag="li">个人中心</router-link>
      </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style  lang="scss" scoped>
    .footers{
      width:100%;
      height: 50px;
      position: fixed;
      bottom: 0;
      left: 0;
      background: #e4f5ff;
      color: #fff;
      ul{
        width: 100%;
        li{
          width: 50%;
          float: left;
          line-height:50px;
          text-align: center;
        }
      }
    }


</style>
