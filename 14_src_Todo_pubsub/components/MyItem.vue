<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleCheck(todo.id)"
      />
      <!-- v-model双向数据绑定 可以直接更新 app.vue里面的数据 
      但是 todo是通过prop传过来的  修改了prop  不推荐
      vue 基本类型通过prop修改 vue能监测到  
      而修改对象里面的数据 vue检测不到
      <input
        type="checkbox"
        v-model='todo.done'
      /> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyItem",
  // 接受父组件传值
  props: ["todo"],
  methods: {
    handleCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      this.$bus.$emit('checkTodo', id)

    },
    handleDelete(id) {
      if (confirm('Are you sure to delete?')) {
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo', id)
        // vue开发者工具没法监测pubsub操作
        pubsub.publish('deleteTodo', id)

      }

      // 通知App组件将对应的todo对象删除
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