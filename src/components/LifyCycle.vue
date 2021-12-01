<template>
  <div>
    <!-- vue3生命周期学习组件 -->
    <h3>生命周期钩子：{{ sum }}</h3>
    <button @click="sum++">sum++</button>
    <h3>当前鼠标点击 x:{{ point.x }} y:{{ point.y }}</h3>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
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
    let point = reactive({
      x: 0,
      y: 0,
    });
    function savePoint(event) {
      point.x = event.pageX;
      point.y = event.pageY;
    }
    //组合方式的api去写生命周期钩子
    //一般不会和下面的生命周期函数一起写
    //如果一起写 setup下的先执行
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
      //window对象的点击 获取坐标方式
      //挂载后开启
      window.addEventListener("click", savePoint);
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      //卸载后移除click
      window.removeEventListener("click", savePoint);
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    return {
      sum,
      point,
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
