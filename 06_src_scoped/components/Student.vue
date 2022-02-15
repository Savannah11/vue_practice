<template>
  <div class="demo">
    <h2 class="inner">学生年龄：{{ age }}</h2>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "你真棒hhhhhhhh",
      age: 45,
      friend: "Jerry",
      schoolName: "gdufs",
    };
  },
};
</script>
// scoped局部作用域 style即使同名 只在该页面模板起作用
// 原理是 在html外层加一个div class随机生成唯一值 利用该属性选择器加demo标识
// 一般不在Vue中加scope
// lang 表明language 默认css
<style lang="less" scoped>
.demo {
  background-color: blue;
  .inner {
    color: red;
  }
}
</style>