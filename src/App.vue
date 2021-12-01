<template>
  <!-- vue3中的根标签可以多个 -->
  <h2>{{ name }}+{{ age }}</h2>
  <h2>{{ msg }}</h2>
  <h2>{{ info.type }}+{{ info.gender }}</h2>
  <button @click="say">name</button>
  <!-- 插槽带入数据 -->
  <Person :msg="hello" :name="ashin"><h2>good study day day up</h2></Person>
  <Demo></Demo>
  <Count></Count>
  <WatchPerson></WatchPerson>
  <LifeCycle v-show="show"></LifeCycle>
</template>
<script>
// import {h} from 'vue'
//定义响应式参数  引用对象 建成ref对象
import { ref, reactive } from "vue";
import Person from "./components/Person.vue";
import Demo from "./components/Demo.vue";
import Count from "./components/Count.vue";
import WatchPerson from "./components/WatchPerson.vue";
import LifeCycle from "./components/LifyCycle.vue";
export default {
  name: "App",
  components: {
    Person,
    Demo,
    Count,
    WatchPerson,
    LifeCycle,
  },
  data() {
    return {
      msg: "hello vue",
    };
  },
  //setup下管理的数据 修改无法实现响应式
  //需要借助ref函数
  //在修改值的时候 要xxx.value=xxx的形式去修改值，才能实现响应式

  setup() {
    //setup的执行 比beforeCreate钩子函数执行的还早 这里的this是undefined
    console.log("setup函数执行");
    let name = ref("ashin");
    let age = ref(18);
    let show = ref(true);
    let info = ref({
      type: "singer",
      gender: "men",
    });

    //使用reactive完成对象的响应式  只能是对象 不能是基本类型
    let test = reactive({
      name: "ashin",
    });
    //数组也需要使用reactive去包装
    let hobbies = reactive(["eat", "sleep", "play"]);

    function say() {
      //字符串修改方式 数据劫持 用Object.defineProperty()的get和set完成
      name.value = "stone";
      age.value = 20;
      //对象数据修改方式 用了vue3中的一个新的函数---reactive函数实现
      info.value.type = "rocker";
      console.log("my name is", name, age);

      //使用reactive包装的对象可直接数据 不用.value获取
      console.log(test);
      //修改的时候可直接修改 也不用value
      test.name = "ming";
      //vue3包装后的数组可通过索引直接修改 但是vue2是不可通过索引完成响应式
      hobbies[0] = "music";
    }
    //setup返回一个对象 常用
    return {
      name,
      age,
      say,
      info,
      show,
    };
    //返回一个渲染函数 替换模版中的所有内容
    // return ()=>h('h1','ashin')
  },
};
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
