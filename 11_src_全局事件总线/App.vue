<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <Student />
    <hr />
    <School ref="school" @click.native="show" />
  </div>
</template>

<script>
// 顺序：引入 配置项 解析模板
// 按引入顺序，后来者如果style重叠取后者
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  data() {
    return {
      msg: '你好啊',
      schoolName: ''
    }
  },
  components: {
    School,
    Student,
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
