<template>
    <div class="alertTip">
      <p class="tipsText">{{alertText}}</p>
      <div class="confirm" @click="confirm">确定</div>
    </div>
</template>

<script>
  export default {
    props:['alertText'],
    methods:{
      confirm(){
        this.$emit('closeTip');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  @keyframes show {
    0%{transform: scale(1);}
    35%{transform: scale(.8)}
    70%{transform: scale(1.1)}
    100%{transform: scale(1)}
  }
  .alertTip{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 200;
    width: 300px;
    height: 110px;
    text-align: center;
    background: #dcdcdcb5;
    animation: show 0.4s;
    @include borderRadius(10px);
    .tipsText{
      padding-top: 20px;
      @include sc(16px,#2f2f2f);
    }
    .confirm{
      margin: 20px auto;
      width: 60px;
      height: 30px;
      line-height: 30px;
      @include sc(18px,$fff);
      @include borderRadius(5px);
      background: #3190e8;
    }
  }


</style>
