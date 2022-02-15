<template>
  <div class="container">
    <Category title="food">
      <!-- 多个同名插槽可以用<template></template>包裹  -->
      <!-- v-slot:footer 只能在template中使用-->
      <template slot="center"
        ><ul v-for="item in this.foods" :key="item.index">
          <li>{{ item }}</li>
        </ul>
        <img
          src="https://t7.baidu.com/it/u=760837404,2640971403&fm=193&f=GIF"
          alt="美食"
      /></template>

      <a href="https://www.baidu.com" slot="footer">更多美食</a>
    </Category>
  </div>
</template>

<script>

import Category from './components/Category.vue'

export default {
  name: "App",
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾'],
      games: ['红色警戒', '穿越火线', '劲舞团'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
    }

  },
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
</style>

