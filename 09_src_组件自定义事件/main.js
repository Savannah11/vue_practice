// 引入Vue
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用插件

new Vue({
  // 将APP 组件放入容器中
  // 接受参数为f  creatElement 
  render: h => h(App),
}).$mount('#app')