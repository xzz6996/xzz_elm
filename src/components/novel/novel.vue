<template>
    <div class="novel">
      <h1>热门小说推荐列表</h1>
      <ul>
        <li v-for="item in list.data">
          <h2>{{item.bookname}}</h2>
          <img :src="item.book_cover" alt="">
          <div>
            <span>作者{{item.author_name}}</span>
            <span>状态{{item.stat_name}}</span>
            <span>分类{{item.class_name}}</span>
            <span>价钱{{item.price}}元</span>
          </div>
          <p>简介{{item.introduction}}</p>
        </li>
      </ul>
      <div v-html="aa"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
      data(){
        return{
          aa:'<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport"content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">  <meta http-equiv="X-UA-Compatible" content="ie=edge"><title>22</title></head><body><div>55555</div></body></html>'
        }
      },
      computed:{
        ...mapGetters({
          list: 'getNovels'
        })
      },
      mounted(){
        //异步调用action里面的getNovel
        this.$store.dispatch('getNovel');
        console.log(this.$store.state)
      },
      created(){

      }
    }
</script>

<style lang="scss" scoped>
  li{
    margin: 20px auto;
  }
  p{
    padding: 0 15px;
    font-size: 16px;
  }
</style>
