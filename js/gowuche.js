angular.module('myApp',[]).controller('myCtrl',function($scope){
    $scope.data=[
        {
          id:1, 
          name:'上衣',
          price:20,
          img:'img/banner1.jpg'
        },
        {
            id:2,
            name:'红裙子',
            price:50,
            img:'img/banner2.jpg'
        },
        {
            id:3,
            name:'蓝裙子',
            price:60,
            img:'img/banner3.jpg'
        },
        {
            id:4,
            name:'美美的',
            price:80,
            img:'img/banner4.jpg'
        }
    
    ]

//购物车 脏值检测
    $scope.car=[]
    $scope.buy=function (v) {
        var flag=true;
        $scope.car.forEach(function (value,i) {
            if(value.id==v.id){
                value.num++;
                flag=false;
            }
        })
        if(flag){
            $scope.car.push({
                id: v.id,
                name:v.name,
                price:v.price,
                num:1
            })
        }
    }
//计算总数
    $scope.totalNum=function () {
        var num=0;
        $scope.car.forEach(function (value) {
            num+=parseInt(value.num);
        })
        return num;
    };
//计算总价
    $scope.totalPrice=function () {
        var price=0;
        $scope.car.forEach(function (value) {
            price+=(value.num*value.price);
        })
        return price;
    };

//删除
    $scope.del=function (index) {
        $scope.car.splice(index,1);
    }

//-
    $scope.jian=function (v) {
        v.num--;
        if(v.num<0){
            v.num=0;
        }
    }
//+    
    $scope.jia=function (v) {
        v.num++;
    }
//清空
    $scope.clear=function () {
        $scope.car=[];
    }
    
    
})