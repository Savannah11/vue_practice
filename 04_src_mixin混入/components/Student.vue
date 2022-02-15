<template>
  <div class="demo">
    <h2>学生年龄：{{ age }}</h2>
    <h2 @click="showName">朋友:{{ friend }}</h2>
  </div>
</template>

<script>
// 引入一个混合
import { hunhe, hunhe2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      msg: "你真棒",
      age: 45,
      friend: "Jerry",
      schoolName: "gdufs",
    };
  },
  mixins: [hunhe, hunhe2],
  // methods: {
  //   showName() {
  //     alert(this.schoolName);
  //   },
  // },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>
