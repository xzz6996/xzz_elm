<template>
  <div class="good">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item border-1px" :class="{'current':currentIndex === index}"
        @click="selectMenu(index,$event)">
          <span class="text ">
           <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1>{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item" @click="selectFood(food,$event)">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="des">{{food.description}}</p>
                <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">${{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">${{food.oldPrice}}</span>
                </div>
                <div class="cartControl-wrapper">
                  <cartControl :food="food"></cartControl>
                </div>
              </div>
            </li>
          </ul>

        </li>
      </ul>
    </div>
    <shopCart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopCart>
    <food :food="selectedFood" ref="food"></food>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import cartControl from '../cartControl/cartControl';
  import shopCart from '../shopCart/shopCart';
  import food from '../food/food';
  const ERR_OK = 0;
    export default {
        props:{
          seller:{
            type: Object
          }
        },
      data (){
        return {
          goods:[],
          scrollY: 0,
          listHeight:[],
          selectedFood:{}
        }
      },
      components:{
        cartControl,shopCart,food
      },
        created(){
          this.$ajax.get("https://xzz6996.github.io/api/goods").then(res=>{
              if(res.data.errno==ERR_OK){
                this.goods=res.data.data;
                this.$nextTick(()=>{
                  this._initScroll();
                  this._calculateHeight();
                })
              }
          });
          this.classMap=['decrease','discount','special','invoice','guarantee'];
        },
      computed:{
          currentIndex(){
            for(let i=0;i<this.listHeight.length;i++){
              let height1=this.listHeight[i];
              let height2=this.listHeight[i+1];
              if(!height2||(this.scrollY>=height1&&this.scrollY<height2)){
                    return  i;
              }
            }
            return 0;
          },
          selectFoods(){
            let foodList=[];
            this.goods.forEach((good)=>{
              good.foods.forEach((food)=>{
                if(food.count){
                  foodList.push(food);
                }
              })
            })
          return foodList;
        }
      },
      methods:{
        selectFood(food,event){
          if(!event._constructed){
            return;
          }
          this.selectedFood=food;
          this.$refs.food.show(); //调用子组建的show方法
        },
        _initScroll(){
          this.menuScroll=new BScroll(this.$refs.menuWrapper,{
            click:true
          });
          this.foodScroll=new BScroll(this.$refs.foodWrapper,{
            click:true,
            probeType:3
          });
          this.foodScroll.on('scroll',(pos)=>{
              this.scrollY=Math.abs(Math.round(pos.y));
          })
        },
        _calculateHeight(){
          let height=0;
          let foodList=this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
          this.listHeight.push(height);
          for(let i=0;i<foodList.length;i++){
            let item=foodList[i];
            height+=item.clientHeight;
            this.listHeight.push(height);
          }
        },
        selectMenu(index,event){
          if(!event._constructed){
            return;// 去掉自带click事件的点击
          }
          let foodList=this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
          let el=foodList[index];
          this.foodScroll.scrollToElement(el,300);
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .good
    position absolute
    left 0
    bottom 0
    top 176px
    overflow hidden
    display flex
    width 100%
    .menu-wrapper
      flex:0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        height 54px
        //width 56px
        line-height 14px
        padding 0 12px
        &.current
          background #ffffff
          font-weight bold
          margin-top -1px
          z-index 10
          position relative
        .icon
          display inline-block
          width 12px
          height 12px
          vertical-align middle
          margin-right 2px
          background-size 12px 12px
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
            font-size 12px
            display table-cell
            width 56px
            vertical-align middle
            border-1px(rgba(7,17,27,0.1))
    .foods-wrapper
      flex 1
      .title
        padding-left 14px
        height 26px
        line-height 26px
        border-left 2px solid #d9dde1
        font-size 12px
        color rgb(147,153,159)
        background #f3f5f7
      .food-item
        display flex
        margin 18px
        padding-bottom 18px
        border-1px(rgba(7,17,27,0.1))
        &.last-child
          border-none()
          margin-bottom 0
        .icon
          flex 0 0 57px
          margin-right 10px
        .content
          flex 1
          .name
            margin 2px 0 8px 0
            height 14px
            line-height 14px
            font-size 14px
            color #ccc
          .des,.extra
            line-height 10px
            font-size 10px
          .des
            margin-bottom 8px
          .extra
            .count
              margin-right 12px
          .price
            font-weight 700
            line-height 24px
            .now
              margin-right 8px
              color red
              font-size 14px
            .old
              font-size 10px
              color #8c8c8c
              text-decoration line-through
          .cartControl-wrapper
            position absolute
            right 0
            bottom 12px
</style>
