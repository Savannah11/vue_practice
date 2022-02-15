<template>
  <ul class="todo-main">
    <!-- 父组件给子组件传值 在子组件模板中绑定数据   -->
    <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
    <!-- 出现传值 数组多一个undefined错误 -->
    <!-- <MyItem></MyItem> -->
  </ul>
</template>

<script>
import MyItem from "./MyItem";
export default {
  name: "MyList",
  components: {
    MyItem
  },
  props: ['todos', "checkTodo", "deleteTodo"]
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
