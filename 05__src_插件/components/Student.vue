<template>
  <div class="demo">
    <h2>学生年龄：{{ age }}</h2>
    <h2>{{ msg | mySlice }}</h2>
    <input type="text" v-fbind:value="friend" />
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

<style>
.demo {
  background-color: orange;
}
</style>
