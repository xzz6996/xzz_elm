<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="myVal" v-focus> {{myValue}}
  </div>
</template>

<script>

export default {
  directives: {
    focus: {
      inserted(el){
        el.focus();
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myVal:''
    }
  },
  computed: {
    myValue () {
      //return this.myVal
      return store.state.myVal
    }
  },
  watch: {
    myVal (x,y) {
      console.log(x,y)
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
