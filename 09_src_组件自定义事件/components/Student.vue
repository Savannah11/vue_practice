<template>
  <div class="demo">
    <h2>Student</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>{{ msg }}</h2>
    <h2>朋友:{{ friend }}</h2>
    <button @click="showFriend(friend)"></button>
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

    };
  },
  props: ['getFriend'],
  methods: {
    showFriend(fri) {
      this.getFriend(fri)
    }
  }
};
</script>

<style lang="less" scoped>
.demo {
  background-color: pink;
}
</style>