<template>
  <div class="cartControl">
    <transition name="fade">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <transition name="inner">
          <span class="icon-jian iconfont"></span>
        </transition>
      </div>
    </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-jia iconfont" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
  import vue from'vue';
    export default {
      props:{
        food:{
          type:Object
        }
      },
      created(){

      },
      methods:{
        addCart(event){
          if(!event._constructed){
            return;// 去掉自带click事件的点击
          }
          if(!this.food.count){
            vue.set(this.food,'count',1);
          }else{
            this.food.count++;
          }
          //        event.srcElement.outerHTML
          this.$emit('increment', event.target); // 子组件通过 $emit触发父组件的方法 increment   还
        },
        decreaseCart(){
          if(!event._constructed){
            return;// 去掉自带click事件的点击
          }
          if(this.food.count){
              this.food.count--;
          }
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/index.styl"
  .cartControl
    display inline-block
    .cart-decrease,.cart-add
      display inline-block
      padding 4px 6px 6px 6px
      color rgb(0,160,220)
      &.fade-enter-active,&.fade-leave-active{
        transition all 0.4s linear
      }
      &.fade-enter,&.fade-leave-active{
        opacity 0
        transform translate3d(24px,0,0)
      }
      .inner
      display inline-block
      line-height 24px
      font-size 24px
      vertical-align top
      color rgb(0, 160, 220, 0.2)
      &.inner-enter-active, &.inner-leave-active {
        transition: all 0.4s linear
        transform: rotate(0)
      }
      &.inner-enter, &.inner-leave-active {
        opacity: 0
        transform  rotate(180deg)
      }
    .cart-count
      display inline-block
      color #000
</style>
