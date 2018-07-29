<template>
    <div class="page">
        <ul>
         <!-- <li><a href=""></a></li>-->
          <li><a href="" setCurrent(1)></a>首页</li>
          <li v-for="(item,index) in groupList"><a href=""></a>index</li>
          <li><a href="" @click="setCurrent(page)"></a>尾页</li>
         <!-- <li><a href=""></a></li>-->
        </ul>
    </div>
</template>

<script>
    export default {
        name: "page",
      props:{
        total:{  //数据总数
          type:Number,
          default:20
        },
        display:{ //每页显示
          type:Number,
          default:10
        },
        currentPage:{ //当前第几页
          type:Number,
          default:1
        },
        pagegroup:{
          type:Number,
          default:5,
          coerce:function (v) {
            v=v>0?v:5;
            return v%2===1?v:v+1;
          }
        }
      },
      data(){
          return{
            current:this.currentPage
          }
      },
      created(){

      },
      computed:{
          page(){// 总页数
            return  Math.ceil(this.total/this.display);
          },
          groupList(){



          }
      },
      methods:{
        setCurrent(id){
          if(id>0&&id<this.page+1&&id!=this.current){
            this.current=id;
            this.$emit('pagechange',this.current)
          }
        }
      }
    }
</script>

<style scoped>

</style>
