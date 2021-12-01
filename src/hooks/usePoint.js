import {reactive,onMounted,onBeforeUnmount} from 'vue'
function savePoint() {
    //实现鼠标点击位置记录数据
    let point = reactive({
        x: 0,
        y: 0,
      });
      //实现坐标赋值
      function savePoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
      }
      onMounted(() => {
        console.log("onMounted");
        //window对象的点击 获取坐标方式
        //挂载后开启
        window.addEventListener("click", savePoint);
      });
      onBeforeUnmount(() => {
        //卸载后移除click
        window.removeEventListener("click", savePoint);
        console.log("onBeforeUnmount");
      })
      //方法返回一个数值 可在组件下直接调用
      return point
  }

  export default savePoint