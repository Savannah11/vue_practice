// 引入Vue
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
import resource from 'vue-resource'
// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(resource)
// 应用插件
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')