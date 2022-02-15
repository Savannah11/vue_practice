<template>
  <!-- 通过template接收子组件插槽中传来的数据 -->
  <!-- 目的：同样的数据 可以显示不同结构 且不直接拿取子组件的数据（props,绑定事件,总线，订阅消息等）-->
  <div class="container">
    <Category title="food">
      <template scope="receiveFood">
        <ul v-for="item in receiveFood.foods" :key="item.index">
          <li>{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="food">
      <template scope="receiveFood">
        <h3 v-for="item in receiveFood.foods" :key="item.index">{{ item }}</h3>
      </template>
    </Category>
  </div>
</template>

<script>

import Category from './components/Category.vue'

export default {
  name: "App",
  components: {
    Category
  },
  methods: {
  }

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
h3 {
  text-align: center;
  color: #e6ceac;
}
</style>

