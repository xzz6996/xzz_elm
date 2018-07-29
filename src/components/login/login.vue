<template>
    <div id="login">
      <input type="text" placeholder="手机号" v-model="userInfo.phone" maxlength="11">
      <input type="password" placeholder="密码" v-model="userInfo.passwd" maxlength="6">
      <button @click="go" v-show="!registes">登陆</button>
      <button @click="registe" v-if="registes">注册</button>
      <a class="goRegiste" @click="goRegiste" v-if="!registes">来注册啊</a>
      <a class="goRegiste" @click="goRegiste" v-if="registes">来登陆啊</a>
      <alert-tip v-if="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
</template>

<script>

  import alertTip from '../../common/alertTip'
  import api from '../../api/interface'
  export default {
    data(){
      return{
        userInfo:{
          key:'00d91e8e0cca2b76f515926a36db68f5',
          phone:'',
          passwd:'',
        },
        showAlert:false,//弹窗是否显示
        alertText:null, //提示内容
        registes:false
      }
    },
    components:{
      alertTip
    },
    created(){},
    methods:{
      goRegiste(){
        this.registes=!this.registes;
      },
      go(){
        let phoneRex=/^1(3|5|4|7||5|8)\d{9}$/;
        if(this.userInfo.phone==''&&this.userInfo.passwd==''){
          this.showAlert=true;
          this.alertText='用户或密码不能为空';
          return
        }
        else if(this.userInfo.phone==''){
          this.showAlert=true;
          this.alertText='手机号不能为空';
          return
        }else if(!phoneRex.test(this.userInfo.phone)){
          this.showAlert=true;
          this.alertText='手机号格式不正确';
          return
        }
        else if(this.userInfo.passwd==''){
          this.showAlert=true;
          this.alertText='密码不能为空';
          return
        }else {
          api.login(this.userInfo).then(res=>{
          if(res.code===200){
            this.showAlert=true;
            this.alertText=res.msg;
            var that=this;
            setTimeout(function () {
              that.$router.replace({ path: '/' });
            },2000)
          }else{
            this.showAlert=true;
            this.alertText=res.msg;
          }
        })}

        this.$store.dispatch('loginAction',this.userInfo);
       // this.$router.replace({ path: '/' }) //登录成功，则跳转到主页
      },
      closeTip(){
        this.showAlert=!this.showAlert;
      },
      registe(){
        api.registe(this.userInfo).then(res=>{
          if(res.code===200){
            this.userInfo.phone='';this.userInfo.passwd='';
            this.showAlert=true;
            this.alertText=res.msg;
          }else{
            this.showAlert=true;
            this.alertText=res.msg;
          }
        })
        this.$store.dispatch('registeAction',this.userInfo);
      }
    }
  }
</script>

<style lang="scss" scoped>
   @mixin sc($height,$color){
     height: $height;
     color: $color;
   }
    input{
      display: block;
      margin: 30px auto;
      border: 1px solid #ccc;
      line-height:40px;
      @include  sc(40px,#2f2f2f)
    }
    button{
      @include  sc(40px,#2f2f2f);
      width: 100px;
      background: #17a3ff;
    }
    .goRegiste{
      color: #ff5b5b;
      font-size: 14px;
      display: block;
      margin: 20px auto;
      text-decoration: underline;
    }
</style>
