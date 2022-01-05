<template>
  <div>
      <!-- 遍历set -->
      <h3 v-for=" item in mySet" :key="item">{{item}}</h3>

      <!-- map遍历key 读取key值 !!!模板中读取的可以通过myMap.get(key)的方式 获取value值-->
      <h3 v-for="key of myMap.keys()" :key="key">{{key}}+{{myMap.get(key)}}</h3>
      <!-- map遍历value和key  这种读取方式模板中的value读取的是[ "name", "myname" ]这种新式 -->
      <h3 v-for="(value,key) of myMap" :key="key">{{value}}</h3>
      <!-- map遍历value 这种模板中读取的只是value -->
      <h3 v-for="value of myMap.values()" :key="value">{{value}}</h3>
  </div>
</template>

<script>
export default {
    name:'ArrLearn',
    setup(){
        //声明set
        let mySet=new Set();
        mySet.add("001");
        mySet.add("002");

        //声明map
        let myMap=new Map();
        myMap.set("name","myname");
        myMap.set("age",23);
        myMap.set("info",{"name":"123"})

       
       return {
           mySet,
           myMap
       }
    },
    mounted(){
        console.log("set learn page")
        //打印set的长度
        console.log(this.mySet.size)
        //判断数组中是否包含某个值
        console.log(this.mySet.has("003"))
        //遍历set下的元素
        for(let item of this.mySet){
            console.log(item)
        }

        //使用 Array.from 转换Set为Array
        let arr=Array.from(this.mySet)
        console.log(arr)
        //解构set里面的值 直接填充到数组
        console.log([...this.mySet]);
        //====================================
        //get通过key获取value
        console.log(this.myMap.get("info"));
        //遍历map的键值
        for(let[key,value] of this.myMap){
            console.log(key + " = " + value);
        }
        //map和数组的关系
        //map可转换成二维数组!!!!  打印二维数组Array.from方式
        console.log(Array.from(this.myMap));
        //转化数组 ...运算符方式
        console.log([...this.myMap]);
        //迭代器只取键或值 用值单独组一个数组
        let keyarr=Array.from(this.myMap.keys());
        console.log(keyarr);


    }
}
</script>

<style>

</style>