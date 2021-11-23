<template>
<!-- vue3中的根标签可以多个 -->
  <h2>{{name}}+{{age}}</h2>
  <h2>{{msg}}</h2>
  <button @click="say">name</button>
</template>
<script>

// import {h} from 'vue'
export default {
  name: 'App',
  // components: {
  
  // }
  data(){
    return {
      msg:'hello vue'
    }
  },
  setup(){
    let name='ashin'
    let age=18

    function say(){
      console.log('my name is',name,age)
    }
    //setup返回一个对象 常用
    return{
      name,
      age,
      say
    }
    //返回一个渲染函数 替换模版中的所有内容
    // return ()=>h('h1','ashin')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
