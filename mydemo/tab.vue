<template>
  <div class="tab">
    <ul>
      <li @click="show(index)" v-for="(item,index) in list" :class="{'active':item.show}" :key="index">{{item.tab}}
        <p v-show="item.show">
          {{item.title}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        list:[
          {"tab":"选项一","show":true,"title":"1111"},
          {"tab":"选项二","show":false,"title":"2222"},
          {"tab":"选项三","show":false,"title":"3333"}
        ]
      }
    },
    methods:{
      show(index){
        for(var i=0;i<this.list.length;i++){
          this.list[i].show=false;
          if(i==index){
            this.list[i].show=true;
          }
        }
      }
    }
  }
</script>

<style scoped>
  *{margin: 0;border: none;padding: 0;text-align: center;}
  ul,li{list-style: none;height: 60px;line-height: 60px;}
  ul{width: 100%;}
  ul li{width: 20%;float: left;}
  .active{background: red}
</style>
