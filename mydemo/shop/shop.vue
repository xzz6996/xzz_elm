<template>
  <div class="shop">
    <div class="title">
      <div>
        <span class="yuan" :class="{'checktrue':isSelectAll}" @click="selectAll(isSelectAll)"></span>
        全选
      </div>
      <div>商品</div>
      <div>数量</div>
      <div>单价</div>
      <div>金额</div>
      <div>可操作</div>
    </div>
    <div class="title" v-for="(item,index) in list" :key="index">
      <div>
        <span class="yuan" @click="item.select=!item.select" :class="{'checktrue':item.select}"></span>
      </div>
      <div>
        <img :src="item.imgSrc" alt="">
        <span>{{item.name}}</span>
      </div>
      <div>
        <span class="jian" @click="reduce(item)">减</span>
        <span>{{item.count}}</span>
        <span class="jia" @click="add(item)">加</span>
      </div>
      <div>{{item.price}}</div>
      <div>{{item.price*item.count}}</div>
      <div @click="delectOne(index)">删除</div>
    </div>

    <div class="title">
      <div @click="delectAll">删除所选商品</div>
      <div>{{getTotal.num}} 件商品</div>
      <div>一共 {{getTotal.totalMoney}} 元</div>
      <div class="aa">结算</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shop",
        data(){
          return{
            list:[
              {
                imgSrc:'../../../static/ccc.jpg',
                name:'头像',
                price:'500',
                count:0
              },
              {
                imgSrc:'../../../static/ccc.jpg',
                name:'头像',
                price:'1000',
                count:0
              },
              {
                imgSrc:'../../../static/ccc.jpg',
                name:'头像',
                price:'1500',
                count:0
              },
              {
                imgSrc:'../../../static/ccc.jpg',
                name:'头像',
                price:'2500',
                count:0
              }
            ],
            total:"0",
            count:"0",
            totalMoney:'0',
            num:"0"
          }
        },
        computed:{
            //是否全部选中
          isSelectAll(){
            return  this.list.every(function (val) {
              return val.select;
            })
          },
          getTotal(){
            var _product=this.list.filter(val=>val.select);
          //var _product=this.list.filter(function (val) {return val.select;})
            var totalPrice=0;
            for(var i=0;i<_product.length;i++){
              totalPrice+=_product[i].count*_product[i].price;
            }
            return {totalMoney:totalPrice,num:_product.length}
          }
        },
        methods:{
          //全选 取消全选
          selectAll(_isSelect){
            for(var i=0;i<this.list.length;i++){
              this.list[i].select=!_isSelect;
            }
          },
          delectOne(index){
            this.list.splice(index,1);
          },
          delectAll(){
            this.list=this.list.filter(function (val) {
            return !val.select;
          })
          },
          add(item){
            item.count++;
          },
          reduce(item){
            if(item.count===0){
              item.count=0;
              return
            }
            item.count--;
          }
        },
        mounted(){
            var _that=this;
            //为list添加 select(是否)字段,初始值为true
            this.list.map(function(item){
              _that.$set(item,'select',false);
          })

        }
    }
</script>

<style scoped>
  .title{width: 100%;}
  .title div{float: left;width: 15%;height: 60px;line-height: 60px;}
  img{width: 20px;}
  .aa{background: #ccc}
  .jian,.jia{background: deepskyblue;}

  .yuan{width: 20px;height: 20px;border: 1px solid #ccc;border-radius: 3px;line-height: 0;display: inline-block;}
  .checktrue{background: #000;}
</style>

