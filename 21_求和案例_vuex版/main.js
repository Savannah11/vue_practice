// 引入Vue
// vue 中import 会提升
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
// 创建store实例 必须先引入vuex y因此直接在index.js中引入vue、vuex 创建store实例
import store from './store'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 应用插件
new Vue({
  render: h => h(App),
  store: store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')