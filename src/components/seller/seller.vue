<template>
  <div class="seller" ref="seller">
      <div class="seller-content">
        <h1>{{seller.name}}</h1>
        <div class="border-1px">
          <star :size="48" :score="seller.score"></star>
          <span>({{seller.ratingCount}})</span>
          <span>月售{{seller.sellCount}}单</span>
        </div>
        <div>
          <span>起送价{{seller.minPrice}}元</span>
          <span>商家派送{{seller.deliveryPrice}}元</span>
          <span>评价配送时间{{seller.deliveryTime}}分钟</span>
        </div>
        <div class="favorite" @click="toggleFavorite($event)">
          <i class="iconfont ccc icon-aixin" :class="{'active':favorite}"></i>
          <span>{{favoriteText}}</span>
        </div>
         <split></split>
        <div>
          <h1>公告与活动</h1>
          <p>{{seller.bulletin}}</p>
        </div>
        <ul>
          <li v-for="(item,index) in seller.supports">
            <span class="icon" :class="classMap[seller.supports[index].type]"></span>
            <span>{{item.description}}</span>
          </li>
        </ul>
        <split></split>
        <div>
          <h1>商家实景</h1>
          <div class="pic-wrapper" ref="picWrapper">
            <ul class="pic-list" ref="picList">
              <li class="pic-item" v-for="pic in seller.pics">
                <img :src="pic" width="120" height="120">
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import star from '../star/star';
  import split from '../split/split'
    export default {
        name: "seller",
        props:{
          seller:{
            type:Object
          }
        },
        data(){
          return {
            favorite:false
          }
        },
        created(){
          this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
          if(!this.scroll){
            this.$nextTick(()=>{
              this.scroll=new BScroll(this.$refs.seller,{click:true})
            })
          }else{
              this.scroll.refresh();
          }

        },
        computed:{
          favoriteText(){
            return this.favorite?"已收藏" :"未收藏"
          }
        },
        methods:{
          toggleFavorite(event){
            if(!event._constructed){return;}
            this.favorite=!this.favorite;
          }
        },
        components:{
          star,split
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import '../../common/stylus/index.styl'
  .seller
     text-align center
    .icon
      display: inline-block;
      width 16px
      height:16px
      background-size 16px 16px
      background-repeat no-repeat
      &.decrease
        bg-image('decrease_4')
      &.discount
        bg-image('discount_4')
      &.special
        bg-image('special_4')
      &.invoice
        bg-image('invoice_4')
      &.guarantee
        bg-image('guarantee_4')
    .favorite
      width 50px
      text-align center
      position: absolute
      right: 0
      top: 20px
      .ccc
        display block
        margin-bottom 4px
        line-height 24px
        font-size 24px
        width 50px
        color #d4d6d9
        &.active
          color rgb(240,20,20)
    p
      padding 20px
    ul li
      width 80%
      text-align left
      margin 10px auto
    .pic-list li
      width 50%
      float left
      img
        margin 0 auto
        display block
</style>
