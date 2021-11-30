<template>
  <h2>{{ person.name }} {{ person.age }}</h2>
  <button @click="person.age++">age++</button>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
export default {
  name: "WatchPerson",
  setup() {
    let person = reactive({
      name: "ashin",
      age: 19,
    });
    watchEffect(() => {
      //person下的age放在watchEffect会被自动监视
      const p = person.age;
      console.log(p);
      console.log("watchEffect回调函数");
    });
    return {
      person,
    };
  },
};
</script>

<style></style>
