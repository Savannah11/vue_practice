<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学校名字:{{ schoolName }}</h2>
    <button @click="showName">点我提示学校</button>
  </div>
  <!-- 组件的结构 -->
</template>

<script>
export default {
  data() {
    return {
      msg: "你真棒",
      myAge: this.age, //从prop读取age   prop优先级更高 优先处理了props
    };
  },
  // 尽量不要修改props里面的值
  // props: ["schoolName", "age"],
  // 接收的同时进行类型限制
  props: {
    schoolName: String,
    age: Number,
  },
  props: {
    schoolName: {
      type: String,
      default: "Ann", //默认值
    },
    // 当这种写法 age不设置属性时 也不能直接写成age 要age{}
    age: {
      required: true, //age是必要的
    },
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
// 组件交互相关的代码（数据、方法等）
</script>

<style>
.demo {
  background-color: orange;
}
/* 样式 */
</style>
