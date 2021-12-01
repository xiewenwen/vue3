<template>
  <div>
    <!-- vue3生命周期学习组件 -->
    <h3>生命周期钩子：{{ sum }}</h3>
    <button @click="sum++">sum++</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
// import { onBeforeMount } from '@vue/runtime-core';
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
export default {
  name: "LifeCycle",
  setup() {
    let sum = ref(0);
    //组合方式的api去写生命周期钩子
    //一般不会和下面的生命周期函数一起写
    //如果一起写 setup下的先执行
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    return {
      sum,
    };
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
};
</script>

<style></style>
