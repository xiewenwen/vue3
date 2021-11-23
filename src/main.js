//createApp为工厂函数
import { createApp } from 'vue'
import App from './App.vue'
//创建应用实例对象
//类似vue2中的vm 但是很轻 相比之下移除了很多函数
createApp(App).mount('#app')
