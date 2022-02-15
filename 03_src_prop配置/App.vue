<template>
  <div id="app">
    <h3 ref="smile">嘻嘻嘻嘻</h3>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- school组建中不写schoolName就使用默认值 -->
    <School :age="34" />
    <!-- age不加： 89 为字符串 "89+1" ==> 891
    age加: v-bind绑定  动态解析"89+1" 里的内容 （js表达式）==>90 -->
    <School ref="sch" :age="89" schoolName="XUexiao"></School>
    <button @click="showDOM"></button>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
  },
  methods: {
    showDOM() {
      console.log(this.$refs); // refs集合 包括school组件
      console.log(this.$refs.smile); //真实DOM元素
    },
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
