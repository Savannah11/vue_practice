// 引入Vue
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用插件x
// 在Vue.prototype上增加一个【组件实例对象】（各组件均可访问）（组件实例对象可访问Vue.prototype上的方法） 作为中间组件方便各组件间传值
// const demo = Vue.extend({})
// const x = new demo()
// Vue.prototype.mediateComponent = x
new Vue({
  // 标准 安装全局事件 放在vm上
  beforeCreate() {
    // Vue.prototype.mediateComponent = this
    Vue.prototype.$bus = this

  },
  // 将APP 组件放入容器中
  // 接受参数为f  creatElement 
  render: h => h(App),
}).$mount('#app')