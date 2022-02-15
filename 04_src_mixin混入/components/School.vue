<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2 @click="showName">学校名字:{{ schoolName }}</h2>
  </div>
</template>

<script>
import { hunhe } from "../mixin";
export default {
  name: "School",
  data() {
    return {
      msg: "你真棒",
      age: 45,
      schoolName: "gdufs",
    };
  },
  mixins: [hunhe],
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
