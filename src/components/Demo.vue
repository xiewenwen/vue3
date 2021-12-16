<template>
  <h2>原始name：{{ person.first }}{{ person.last }}</h2>
  <!-- <h2>计算属性name：{{ finaname }}</h2> -->
  <h2>vue3的计算属性：{{ person.newname }}</h2>
  <h2>{{ person.age }}</h2>
</template>

<script>
import {
  reactive,
  computed,
  shallowReactive,
  shallowRef,
} from "@vue/reactivity";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      first: "a",
      last: "shin",
      age: 18,
    });
    //传入的是对象 shallowReactive会对一层数据的响应式(浅响应式 )
    let person2 = shallowReactive({
      age: 19,
      info: {
        name: "ashin",
        gender: "men",
      },
    });
    let x = shallowRef(0);
    //计算属性需要引入模块
    //直接在setup上下的对象中追加新的属性，用computed箭头函数
    //（简写形式）
    person.newname = computed(() => {
      return person.first + "-" + person.last;
    });

    //计算属性完整形式
    person.fullname = computed({
      //得到计算属性的值
      get() {
        return person.first + "-" + person.last;
      },
      //分别修改first，last的时候 重新赋予计算属性的值
      //value是计算属性的全值
      //需要拆开重新组装
      set(value) {
        const nameArr = value.split("-");
        person.first = nameArr[0];
        person.last = nameArr[1];
      },
    });

    return { person, person2 };
  },
  //   computed: {
  //     finaname() {
  //       return this.person.first + "-" + this.person.last;
  //     },
  //   },
};
</script>

<style></style>
