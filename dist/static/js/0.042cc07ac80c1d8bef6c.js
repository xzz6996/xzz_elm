webpackJsonp([0],{BMMI:function(t,s){},FyI9:function(t,s){},g13P:function(t,s){},msP5:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e("GQaK"),i=e("7+uW"),a={props:{food:{type:Object}},created:function(){},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("increment",t.target))},decreaseCart:function(){event._constructed&&this.food.count&&this.food.count--}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartControl"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("transition",{attrs:{name:"inner"}},[e("span",{staticClass:"icon-jian iconfont"})])],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-jia iconfont",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},staticRenderFns:[]};var c=e("VU/8")(a,n,!1,function(t){e("xWd5")},"data-v-3b80e4fa",null).exports,r={components:{cartControl:c},data:function(){return{fold:!0}},props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},created:function(){},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?this.minPrice+"元起送":this.minPrice>this.totalPrice?"还差"+(this.minPrice-this.totalPrice)+"元送":"去结算"},payClass:function(){return this.totalPrice>this.minPrice?"enough":"no-enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new o.a(t.$refs.listContent,{click:!0})}),s}},methods:{toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!1},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice+"元")}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopCart"},[e("div",{staticClass:"content",on:{click:function(s){t.toggleList(s)}}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("span",{staticClass:"iconfont icon-gouwuche",class:{highlight:t.totalCount>0}})]),t._v(" "),t.totalCount>0?e("div",{staticClass:"num"},[t._v(t._s(t.totalCount))]):t._e()]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("$"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v(t._s(t.payDesc))])])]),t._v(" "),e("transition",{attrs:{namde:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"shopcart-food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[t._v("$"+t._s(s.price*s.count))]),t._v(" "),e("div",{staticClass:"cartControl-wrapper"},[e("cartControl",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:function(s){t.hideList()}}})])],1)},staticRenderFns:[]};var d=e("VU/8")(r,l,!1,function(t){e("BMMI")},"data-v-74eeb80c",null).exports,u=e("fJdx"),f=e("e9KK"),v=e("fjIZ"),h={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!1,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new o.a(t.$el,{click:!0})})},incrementTotal:function(t,s){var e=this;this[t]=s,this.$nextTick(function(){e.scroll.refresh()})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&i.a.set(this.food,"count",1)},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formatDate:function(t){var s=new Date(t);return Object(v.a)(s,"yyyy-MM-dd hh:mm")}},components:{cartControl:c,ratingselect:f.a,split:u.a}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"food"},[e("div",{staticClass:"fond-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"iconfont icon-zuoyoujiantou"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v(" 好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartControl-wrapper"},[e("cartControl",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"buy"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count === 0"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("\n            加入购物车\n          ")])])],1),t._v(" "),e("split"),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{increment:t.incrementTotal}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("i",{staticClass:"iconfont",class:{"icon-damuzhi":0===s.rateType,"icon-down":1===s.rateType}}),t._v("\n                "+t._s(s.text)+"\n              ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||0===t.food.ratings.length,expression:"!food.ratings || food.ratings.length === 0"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]};var _=e("VU/8")(h,p,!1,function(t){e("FyI9")},null,null).exports,C={props:{seller:{type:Object}},data:function(){return{goods:[],scrollY:0,listHeight:[],selectedFood:{}}},components:{cartControl:c,shopCart:d,food:_},created:function(){var t=this;this.$ajax.get("http://localhost:8080/api/goods").then(function(s){0==s.data.errno&&(t.goods=s.data.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))}),this.classMap=["decrease","discount","special","invoice","guarantee"]},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},_initScroll:function(){var t=this;this.menuScroll=new o.a(this.$refs.menuWrapper,{click:!0}),this.foodScroll=new o.a(this.$refs.foodWrapper,{click:!0,probeType:3}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=0,s=this.$refs.foodWrapper.getElementsByClassName("food-list-hook");this.listHeight.push(t);for(var e=0;e<s.length;e++){t+=s[e].clientHeight,this.listHeight.push(t)}},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodWrapper.getElementsByClassName("food-list-hook")[t];this.foodScroll.scrollToElement(e,300)}}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"good"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,o){return e("li",{staticClass:"menu-item border-1px",class:{current:t.currentIndex===o},on:{click:function(s){t.selectMenu(o,s)}}},[e("span",{staticClass:"text "},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n        ")])])}))]),t._v(" "),e("div",{ref:"foodWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"des"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("$"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("$"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartControl-wrapper"},[e("cartControl",{attrs:{food:s}})],1)])])}))])}))]),t._v(" "),e("shopCart",{attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var g=e("VU/8")(C,m,!1,function(t){e("g13P")},"data-v-75da1eb9",null);s.default=g.exports},xWd5:function(t,s){}});
//# sourceMappingURL=0.042cc07ac80c1d8bef6c.js.map