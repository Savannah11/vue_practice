<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <h2>学校成年时间：{{ age }}</h2>
    <h2>学校年龄：{{ schoolName }}</h2>
  </div>
</template>

<script>
// pubsub插件  里面是对象 有很多方法
import pubsub from 'pubsub-js'
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
    // 回调的第一个参数为消息名，后面的是所传参数
    this.pubId = pubsub.subscribe('hello', function (msgName, data) {
      console.log(this)  //！！！undefined 应该写成箭头函数或放在methods中
      console.log('有人发布hello消息，订阅hello并执行回调' + data)
    })
    // this.$bus.$on('hello', (data) => console.log('school接收到来自Student的数据', data))
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    // 类似定时器  需要通过ID取消订阅
    pubsub.unsubscribe(this.pubId)
  }
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>
