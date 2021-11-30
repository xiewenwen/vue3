<template>
  {{ num }} {{ sum }}
  <button @click="getone">+1</button>
  <h2>{{ person.name }} {{ person.age }}</h2>
  <button @click="updatep">更新信息</button>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  name: "Count",
  setup() {
    let num = ref(2);
    let sum = ref(100);
    let person = reactive({
      name: "ashin",
      age: 19,
    });
    let p = ref({
      name: "ashin",
      age: 19,
    });
    //情况一：vue3中的单个参数的watch属性
    watch(sum, (newvalue, oldvalue) => {
      console.log(newvalue, oldvalue);
    });
    //情况二：多个值同时监视
    //第一个参数 要监视的对象
    //第二个参数  回调函数
    //第三个参数  immediate deep参数的配置
    watch(
      [sum, num],
      (newvalue, oldvalue) => {
        console.log(newvalue, oldvalue);
      },
      { immediate: true, deep: true }
    );
    //情况三：监视对象 注意 注意 注意 注意 此处无法获取正确的newvalue, oldvalue
    watch(person, (newvalue, oldvalue) => {
      console.log(newvalue, oldvalue);
    });
    //当p定义的时候 用了ref定义 在检测的时候需要开启深度检测，否则无法检测到实际的数据
    watch(
      p,
      (newvalue, oldvalue) => {
        console.log(newvalue, oldvalue);
      },
      { deep: true }
    );

    function getone() {
      num.value++;
      sum.value++;
    }
    function updatep() {
      person.name = "me";
      person.age = 10;
    }
    return {
      num,
      getone,
      sum,
      person,
      updatep,
    };
  },
  //vue2中原先的监视属性
  watch: {
    //watch的简写形式
    num(newvalue, oldvalue) {
      console.log(newvalue, oldvalue);
    },
    //watch的完整写法
    sum: {
      immediate: true,
      deep: true,
      handler(newvalue, oldvalue) {
        console.log(newvalue, oldvalue);
      },
    },
  },
};
</script>

<style></style>
