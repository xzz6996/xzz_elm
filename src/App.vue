<template>
  <div>
    <!-- 头部 -->
    <v-header :seller="seller"></v-header>
    <!-- 主体切换 -->
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/good" :seller="seller">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rating">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>

  </div>
</template>
<script type="text/ecmascript-6">
  import header from './components/header/top.vue';
  //import {urlParse} from 'common/js/util';
 const ERR_OK = 0;
  export default {
    data() {
      return {
        seller: {},
      /*  id: (() => {
          let queryParam = urlParse();
          console.log(queryParam);
          return queryParam.id;
        })()*/
      };
    },
    created() {
//      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
//        response = response.body;
//        if (response.errno === ERR_OK) {
//          this.seller = response.data;
//          this.seller = Object.assign({}, this.seller, response.data);
//        }
//      });
      this.$ajax.get("http://localhost:8080/api/seller").then(res=>{
        if(res.data.errno==ERR_OK){
          this.seller = res.data.data;
        }
      })
    },
    components: {
      'v-header': header
    },

  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl";

  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*border: 1px solid rgba(7,17,27,0.1);*/
    border-1px(rgba(7, 17, 27, 0.1));
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;
  }

  .tab .tab-item a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }

  .tab .tab-item .active {
    color: rgb(240, 20, 20);
  }
</style>
