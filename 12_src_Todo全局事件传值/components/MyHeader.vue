<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
      v-model="title"
    />
  </div>
</template>

<script>
// nanoid 使用了分别暴露形势进行暴露
// 引入了里面的一个函数
import { nanoid } from 'nanoid'
export default {
  name: "MyHeader",
  data() {
    return {
      title: ''
    };
  },
  // 子组件接受父组件传来的函数
  // props: ['addTodo'],
  methods: {
    // 获取元素数据：
    //   1.给元素绑定事件，通过event.target value值获取数据；
    //   2.绑定元素，获取元素值
    add(e) {
      // console.log(e.target.value)
      // uuid生成全球唯一的id编码  地理位置+网卡+....
      // nanoid  uuid精简化

      // 校验数据
      if (!this.title.trim()) return alert('please do something!')
      // 获取用户输入 并装成todo对象
      const todoObj = { id: nanoid(), title: this.title, done: false }
      console.log(todoObj)
      // 给函数传递子组件的值，父组件中更新todos数据
      // this.addTodo(todoObj)
      this.$emit('addTodo', todoObj)
      // 输入框重新赋值为空
      this.title = ''

    }
  }
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
