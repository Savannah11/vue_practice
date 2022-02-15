// 引入Vue
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 不同版本的Vue：
//   .vue.js与vue.runtime.xxx.js的区别：
//     .vue.js是完整版的vue，包含：核心功能+模板解析器。
//     .vue.runtime.xxx.js是运行版的Vue 只包含：核心功能，没有模板解析器。
//   因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
//     需要使用render函数接受到的createElement函数区制定具体内容
// 创建一个Vue的实例对象
new Vue({
  // 将APP 组件放入容器中
  // 接受参数为f  creatElement 
  render: h => h(App),
}).$mount('#app')