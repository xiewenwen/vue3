<template>
<!-- vue3中的根标签可以多个 -->
  <h2>{{name}}+{{age}}</h2>
  <h2>{{msg}}</h2>
  <h2>{{info.type}}+{{info.gender}}</h2>
  <button @click="say">name</button>
</template>
<script>

// import {h} from 'vue'
//定义响应式参数  引用对象 建成ref对象
import {ref} from 'vue'
export default {
  name: 'App',
  // components: {
  
  // }
  data(){
    return {
      msg:'hello vue'
    }
  },
  //setup下管理的数据 修改无法实现响应式
  //需要借助ref函数
  //在修改值的时候 要xxx.value=xxx的形式去修改值，才能实现响应式
  setup(){
    let name=ref('ashin')
    let age=ref(18)
    let info=ref({
      type:'singer',
      gender:'men'
    })

    function say(){
      //字符串修改方式 数据劫持 用Object.defineProperty()的get和set完成
      name.value='stone'
      age.value=20
      //对象数据修改方式 用了vue3中的一个新的函数---reactive函数实现
      info.value.type='rocker'
      console.log('my name is',name,age)
    }
    //setup返回一个对象 常用
    return{
      name,
      age,
      say,
      info
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
