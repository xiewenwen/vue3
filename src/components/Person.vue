<template>
  <h2>person===== {{ p.hobbies }}+{{ p.age }}</h2>
  <button @click="change">change</button>
  <h2>{{ obj.c }}</h2>
  <button @click="num">Reflect</button>
  <slot></slot>
  <h2>{{ msg }}+{{ name }}</h2>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "Person",
  data() {
    return {
      obj: {
        a: 100,
        b: 200,
      },
    };
  },
  props: ["msg", "name"],
  setup(props, context) {
    //props:值为对象，包含组件外部传递过来的，且在组件内部接收了的属性
    //context:上下文对象
    console.log(props);
    console.log(context.attrs);
    let p = reactive({
      name: "xiao zhan",
      gender: "men",
      hobbies: ["a", "b", "c"],
    });
    function change() {
      //直接通过索引修改
      p.hobbies[0] = "eat";
      //直接追加属性
      p.age = 12;
    }

    return {
      p,
      change,
    };
  },
  methods: {
    num() {
      Reflect.defineProperty(this.obj, "c", {
        get() {
          return 300;
        },
      });
      console.log(this.obj.c);
    },
  },
};
</script>

<style></style>
