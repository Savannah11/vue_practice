<template>
  <div class="todo-footer" v-show="length">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ finished }}</span> / 全部{{ length }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {

    };
  },
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  computed: {
    length() {
      return this.todos.length
    },
    finished() {
      // let doneNum = 0
      // this.todos.forEach(todo => {
      //   if (todo.done == true) {
      //     doneNum++
      //   }

      // });
      // return doneNum;

      // 需要记住前一次结果reduce更合适    
      // return this.todos.reduce((total, cur, index, arr) => {
      //   return total + (cur.done ? 1 : 0)
      // if (cur.done) {
      //   return ++total
      // } else {
      //   return total
      // }
      // 精简版
      return this.todos.reduce((total, cur) => total + (cur.done ? 1 : 0), 0)
    },
    // isAll() {
    //   return this.finished === this.length && this.length > 0
    // }
    isAll: {
      get() {
        return this.finished === this.length && this.length > 0
      },
      set(allChecked) {
        this.checkAllTodo(allChecked)
      }
    }
  },
  methods: {
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked)
    //   // console.log(e.target.checked)

    // }
    clearAll() {
      this.clearAllTodo()
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>