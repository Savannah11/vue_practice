<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <!-- 子组件传给父组件 定义函数形式 -->
    <Student :getFriend="getFriend" />
    <hr />
    <!-- 子组件传给父组件  父给子组件绑定一个自定义事件  (@ v-on)-->
    <!-- <School v-on:selfDefine.once="getSchoolName" /> -->
    <!-- 子组件传给父组件  父给子组件绑定一个自定义事件  (ref)-->
    <!-- 绑定原生事件 默认加在组件最外层  
    为什么组件不能有两个最外同级标签原因之一 -->
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
  methods: {
    getFriend(fri) {
      console.log(fri)
    },
    // getSchoolName(name,...params)传多个参数
    getSchoolName(name) {
      console.log(name)
    },
    getSchoolAge(age) {
      console.log(age)
    },
    show() {
      console.log('组件绑定的原生事件被调用')
    }
  },
  mounted() {
    setTimeout(() => this.$refs.school.$on('selfDefine', this.getSchoolName), 3000)
    // 事件只触发一次
    // this.$refs.school.$once('selfDefine', this.getSchoolName)
    this.$refs.school.$on('selfDefine2', this.getSchoolAge)

    // this.$refs.school.$on('selfDefine',function(name){
    //  this.schoolName = name
    // console.log(this.schoolName)
    // 这里的 this是School组件实例对象
    // 写成箭头函数则是App实例对象
    // })
  }

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
