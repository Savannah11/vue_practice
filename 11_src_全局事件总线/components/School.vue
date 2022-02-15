<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <h2>学校成年时间：{{ age }}</h2>
    <h2>学校年龄：{{ schoolName }}</h2>
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
  methods: {
    sendSchoolName() {
      // 触发School组件实例身上的selfDefine事件
      // this.$emit('selfDefine')
      // 触发事件+传参
      this.$emit('selfDefine', this.schoolName)
    },
    sendSchoolAge() {
      this.$emit('selfDefine2', this.age)

    },
    unbind() {
      // this.$off('selfDefine')
      // 解绑多个自定义事件
      this.$off(['selfDefine', 'selfDefine2'])
      console.log('2个事件成功解绑')
    },
    die() {
      // 销毁当前School组件的实例，销毁后所有School实例的自定义事件全都不奏效
      this.$destroy()
    },
  },
  mounted() {
    console.log('School', this)
    this.$bus.$on('hello', (data) => console.log('school接收到来自Student的数据', data))
  },
  // 解绑事件
  beforeDestroy() {
    // Student组件销毁后  $bus上的自定义事件还存在 ，因此需要在此销毁
    this.$bus.$off('hello')
  }
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>
