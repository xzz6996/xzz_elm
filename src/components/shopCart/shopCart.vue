<template>
  <div>
    <div class="shopCart">
      <div class="content" @click="toggleList($event)">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount>0}">
              <span class="iconfont icon-gouwuche" :class="{'highlight':totalCount>0}"></span>
            </div>
            <div class="num" v-if="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight':totalPrice>0}">${{totalPrice}}</div>
          <div class="desc">另需配送费{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" @click.stop.prevent="pay">
          <div class="pay" :class="payClass" >{{payDesc}}</div>
        </div>
      </div>
      <transition namde="fade">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="shopcart-food" v-for="food in selectFoods">
                <span class="name">{{food.name}}</span>
                <div class="price">${{food.price*food.count}}</div>
                <div class="cartControl-wrapper">
                  <cartControl :food="food"></cartControl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" @click="hideList()" v-show="listShow"></div>
    </transition>
  </div>
</template>

<script>
  import cartControl from '../cartControl/cartControl';
  import BScroll from 'better-scroll';
    export default {
      components:{
        cartControl
      },
      data(){
        return{
          fold:true
        }
      },
      props:{
        selectFoods:{
          type: Array,
          default(){
            return []
          }
        },
        deliveryPrice:{
          type: Number,
          default: 0
        },
        minPrice:{
          type: Number,
          default: 0
        }
      },
      created(){},
      computed:{
        totalPrice(){
          let total=0;
          this.selectFoods.forEach((food)=>{
            total+=food.price*food.count;
          })
          return total;
        },
        totalCount(){
          let count=0;
          this.selectFoods.forEach((food)=>{
            count+=food.count
          })
          return count;
        },
        payDesc(){
            if(this.totalPrice===0){
              return `${this.minPrice}元起送`;
            }else if(this.minPrice>this.totalPrice){
              let x=this.minPrice-this.totalPrice;
              return `还差${x}元送`;
            } else{
              return `去结算`;
            }
        },
        payClass(){
            if(this.totalPrice>this.minPrice){
              return 'enough';
            }else{
              return 'no-enough';
            }
        },
        listShow(){
          if(!this.totalCount){
            this.fold=true;
              return false;
          }
            let show=!this.fold;
          if(show){
            this.$nextTick(()=>{
              if(!this.scroll){
                this.scroll=new BScroll(this.$refs.listContent,{
                    click:true
                })
              }else {
                this.scroll.refresh();
              }
            })
          }
          return show;
        },
      },
      methods:{
        toggleList(){
          if(!this.totalCount){
            return;
          }
          this.fold=!this.fold;
        },
        empty(){
          this.selectFoods.forEach((food)=>{
            food.count=0;
          })
        },
        hideList(){
          this.fold=false;
        },
        pay(){
          if(this.totalPrice<this.minPrice){
            return;
          }
          window.alert("支付"+this.totalPrice+"元");
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/index.styl'
  .shopCart
    position absolute
    z-index 100
    left 0
    bottom 0
    width 100%
    height 48px
    background #141d17
    .content
      display flex
      .content-left
        flex 1
        .logo-wrapper,.price,.desc
          display inline-block
        .logo-wrapper
          position relative
          top -10px
          margin 0 12px
          padding 6px
          width 56px
          height 56px
          vertical-align middle
          border-radius 50%
          background #141d17
          .logo
            width 100%
            height 100%
            background #2b343c
            border-radius 50%
            text-align center
            &.highlight
              background rgb(0,160,220)
            .icon-gouwuche
              font-size 24px
              line-height 44px
              color #80858a
              &.highlight
                color #fff
          .num
            position absolute
            right 0
            top 0
            width 24px
            background red
            height 16px
            line-height 16px
            text-align center
            color #fff
            border-radius 16px
            font-size 9px
            font-weight 700
            box-shadow 0 4px 5px 0 rgba(52, 52, 52, 0.87)
        .price
          line-height 24px
          vertical-align top
          margin-top 12px
          box-sizing border-box
          padding-right 12px
          border-right 1px solid red
          font-size 16px
          font-weight 700
          color #fff
          &.highlight
            font-weight bold
        .desc
          color #fff
          font-size 11px
          line-height 48px
      .content-right
        flex 0 0 105px
        width 105px
        color #fff
        text-align center;
        line-height 56px
        font-size 16px
        background: #464343;
        .pay
          background: #464343;
          &.enough
            background #258014
            font-weight bold
            color #fff
          &.no-enough
            background: #464343;
    .shopcart-list
      position absolute
      top 0
      left 0
      background #fff
      width 100%
      z-index -1
      transform translate3d(0, -100%, 0)
      &.fade-enter-active,&.fade-leave-active{
        transition all 0.5s
        transform translate3d(0, -100%, 0)
      }
      &.fade-enter,&.fade-leave-active{
        transform translate3d(0, 0, 0)
      }
      .list-header
        height 40px
        line-height 40px
        padding 0 18px
        background #f3f5f7
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
        .title
          float left
          font-size 14px
          color rgb(7, 17, 27)
        .empty
          float right
          font-size 12px
          color rgb(0, 160, 220)
      .list-content
        padding 0 18px
        max-height 217px
        overflow hidden
        background #ffffff
        .shopcart-food
          position relative
          padding 12px 0
          box-sizing border-box
          border-1px(rgba(7, 17, 27, 0.1))
          .name
            line-height 24px
            font-size 14px
            color rgb(7, 17, 27)
          .price
            position absolute
            right 90px
            bottom 12px
            line-height 24px
            font-size 14px
            font-weight 700
            color rgb(240, 20, 20)
          .cartControl-wrapper
            position absolute
            right 0
            bottom 6px
  .list-mask
    width 100%
    height 100%
    background rgba(7, 17, 27, 0.6)
    top 0
    left 0
    z-index 40
    position: fixed;
    opacity 1
    &.fade-leave-active,&.fade-enter-active{
      transition all 0.5s
      opacity 1
      background rgba(7, 17, 27, 0.6)
    }
    &.fade-leave-active,&.fade-enter{
      opacity 0
      background rgba(7, 17, 27, 0)
    }
</style>
