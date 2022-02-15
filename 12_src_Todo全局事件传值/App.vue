<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        ></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
// 顺序：引入 配置项 解析模板
// 按引入顺序，后来者如果style重叠取后者
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";
export default {
  name: "App",
  data() {
    return {
      // todos: [
      //   { id: "001", title: "eat", done: true },
      //   { id: "002", title: "homework", done: false },
      //   { id: "003", title: "read", done: false },
      //   { id: "004", title: "dance", done: true },
      //   { id: '005', title: 'sing', done: false }
      // ]
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  // 父组件给子组件传参数：
  //   父组件给子组件绑定一个函数
  //   孩子调用函数时 给函数传递值
  //   父亲通过该函数获取到子组件的值
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      // console.log(x)
      // 更新todos 重新解析模板
      this.todos.unshift(todoObj)
    },
    // 勾选或取消一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
          console.log(todo.done)
        }
      })
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach(todo => todo.done = done)
    },
    // 清空全部已完成任务
    clearAllTodo() {
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  mounted() {
    // 绑定事件 准备接受 item传来的数据
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)

  },
  beforeDestroy() {
    // 销毁前解绑事件
    this.$bus.$off(['checkTodo', 'deleteTodo'])
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  // 监视数据变动更新缓存
  watch: {
    // 不能深度监测到对象中属性的变化
    // todos(val) {
    //   localStorage.setItem('todos', JSON.stringify(val))
    // }
    todos: {
      deep: true,
      handler(val) {
        localStorage.setItem('todos', JSON.stringify(val))
      }
    }
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
