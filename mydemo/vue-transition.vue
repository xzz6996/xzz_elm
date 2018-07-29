<template>
    <div id="container">
      <transition name="fade" :duration="0" @before-enter="handleBeforeEnter" @enter="handleEnter">
        <p v-show="isShow">hello</p>
      </transition>
      <button @click="show"></button>


      <transition

        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"

        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled">
      </transition>


    </div>
</template>
<!--:duration 显性的过渡持续时间-->
<script>
    export default {
        name: "vue-transition",
        data(){
          return{
            isShow:true
          }
        },
      methods:{
        show(){
            this.isShow=!this.isShow;
        },
        handleBeforeEnter(el){
            el.style.color='red';
        },
        handleEnter(){},
        // 进入中
        beforeEnter: function (el) {
          // ...
        },
        // 此回调函数是可选项的设置
        // 与 CSS 结合时使用
        enter: function (el, done) {
          // ...
          done()
        },
        afterEnter: function (el) {
          // ...
        },
        enterCancelled: function (el) {
          // ...
        },

        // --------
        // 离开时
        // --------

        beforeLeave: function (el) {
          // ...
        },
        // 此回调函数是可选项的设置
        // 与 CSS 结合时使用
        leave: function (el, done) {
          // ...
          done()
        },
        afterLeave: function (el) {
          // ...
        },
        // leaveCancelled 只用于 v-show 中
        leaveCancelled: function (el) {
          // ...
        }
      }
    }
</script>

<style scoped>
  /* 显示-隐藏   v-leave-to v-leave-active*/
  /*隐藏-显示  v-enter v-enter-active*/
  /*.fade-enter,.fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active,.fade-leave-active{
    transition: opacity 1s;
  }
  @keyframes aaa {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }*/


</style>
