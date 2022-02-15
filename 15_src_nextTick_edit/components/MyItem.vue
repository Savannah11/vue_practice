<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleCheck(todo.id)"
      />

      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        v-model="title"
        @blur="handleBlur(todo)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyItem",
  data() {
    return {
      title: this.todo.title,
    }
  },
  // 接受父组件传值
  props: ["todo"],
  methods: {
    handleCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      this.$bus.$emit('checkTodo', id)
    },
    handleDelete(id) {
      if (confirm('Are you sure to delete?')) {
        pubsub.publish('deleteTodo', id)
      }
    },
    handleEdit(todo) {
      // 判断todo.isEdit是否存在 而不是判断里面的值
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      }
      else {
        this.$set(todo, 'isEdit', true)
      }
      // console.log(this.$refs.inputTitle)
      // 这里个人认为应该默认聚焦到input元素 但老子不会实现
      // 回调执行完毕才重新解析模板因此这里的input设置聚焦不成功
      // todo.isEdit = true   没有响应式
      // nextTick方法会等DOM模板重新解析完毕执行
      this.$nextTick(() => this.$refs.inputTitle.focus())  //在下一次更新DOM结束后，执行其指定的回调 数据改变后 要基于更新的新DOM操作
    },
    handleBlur(todo) {
      // 出现这个输入框时 todo上已经有了isEdit属性  
      todo.isEdit = false
      console.log(this.title)
      if (this.title.trim()) {
        // 或者通过绑定事件传$event 获取编辑后的title
        this.$bus.$emit('updateTodo', this.title, todo.id)
      }
      else {
        alert('please enter something')
      }
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: blanchedalmond;
}
li:hover button {
  display: block;
}
</style>