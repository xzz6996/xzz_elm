<template>
    <div class="meitu">
      <div>
        <h1>美图</h1>
        <ul class="aa">
          <li v-for="(item,index) in pages" @click="showNew(item,index)" :class="{'active':item.select}">
            {{item.page}}
          </li>
        </ul>
        <ul>
          <li v-for="item in list.data">
            <img :src="item.url" alt="">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
      data(){
        return{
          nowPage:1,
          pages:[
            {'page':'1','select':true},
            {'page':'2','select':false},
            {'page':'3','select':false}
          ]
        }
      },
    computed:{
        ...mapGetters({
          list:'getMeituLists'
        })
      },
    mounted(){
      this.$store.dispatch('getMeituList',{page:this.nowPage});
    },
    methods:{
      showNew(item,index){
        this.$store.dispatch('getMeituList',{page:item.page});
       for(var i=0;i<this.pages.length;i++){
          this.pages[i].select=false;
          if(i===index){
            this.pages[i].select=true;
          }
       }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 768px){
    img{
      width: 100px;
    }
  }
  @media screen and (min-width: 768px){
    img{
      width: 500px;
    }
  }
  .aa{display: flex;justify-content: space-around;width: 80%;margin: 0 auto;}
  .aa li{width: 20px;height: 20px;background: #2386ef;line-height: 20px;text-align: center;color: #fff;}
  .aa li.active{background: #ff8814}
</style>
