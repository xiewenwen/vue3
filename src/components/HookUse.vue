<template>
  <div>
    <h3>use hook当前鼠标点击 x:{{ point.x }} y:{{ point.y }}</h3>
  </div>
</template>

<script>
//这边引入写好的hook方法
import hook from "../hooks/usePoint.js";
export default {
  name: "HookUse",
  setup() {
    //直接调用引入的hook 给参数赋值
    //类似于vue2中的mixin
    let point = hook();
    return {
      point,
    };
  },
};
</script>

<style></style>
