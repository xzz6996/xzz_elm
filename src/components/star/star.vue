<template>
    <div class="star">
      <div class="star-item" :class="starType">
        <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" track-by="$index"></span>
      </div>
    </div>
</template>

<script>
  const LENGTH=5;
  const CLS_ON='on';
  const CLS_HALF='half';
  const CLS_OFF='off';
  export default {
    props:{
      size:{
        type :Number
      },
      score:{
        type :Number
      }
    },
    data() {
      return {

      }
    },
    computed:{
      starType(){
        return 'star-' +this.size;
      },
      itemClasses(){
        let result=[];
        let score=Math.floor(this.score*2)/2;
        let hasDecimal= score %1 !==0; //半星
        let integer=Math.floor(score); //全星
        for(let i=0;i<integer;i++){
          result.push(CLS_ON);
        }
        if(hasDecimal){
          result.push(CLS_HALF);
        }
        while(LENGTH>result.length){
          result.push(CLS_OFF);  //灰星
        }
        return result;
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin.styl';
  .star
    font-size 0px
    .star-item
      display inline-block
      background-repeat no-repeat
      &.star-48
        .star-item
          width 20px
          height: 20px
          background-size 20px 20px
          margin-right 5px
          &.last-child
            margin-right 0px
          &.on
            bg-image ('star48_on')
          &.half
            bg-image ('star48_half')
          &.off
            bg-image ('star48_off')
      &.star-36
        .star-item
          width 15px
          height: 15px
          background-size 15px 15px
          margin-right 5px
          &.last-child
            margin-right 0px
          &.on
            bg-image ('star36_on')
          &.half
            bg-image ('star36_half')
          &.off
            bg-image ('star36_off')
      &.star-24
        .star-item
          width 10px
          height: 10px
          background-size 10px 10px
          margin-right 3px
          &.last-child
            margin-right 0px
          &.on
            bg-image ('star24_on')
          &.half
            bg-image ('star24_half')
          &.off
            bg-image ('star24_off')




</style>
