<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "你真棒",
      age: 45,
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
