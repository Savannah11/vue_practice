// 引入Vue
// vue 中import 会提升
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
// 引入elementui 组件库
// import ElementUI from 'element-ui';
// // 引入elementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用ElementUI
// Vue.use(ElementUI)
// 按需引入
import {
  Button,
  Row,
  DatePicker
} from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);
// 应用插件
new Vue({
  render: h => h(App),
}).$mount('#app')