<template>
  <div class="category">
    <h3 id="title">{{ this.title }}分类</h3>
    <!-- 定义插槽  将data中foods中的数据传到App具体结构中 -->
    <slot :foods="foods"></slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾'],
    }

  },

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
  height: 100px;
}
ul > li,
ol > li {
  list-style: none;
  text-align: center;
  color: #e6ceac;
  margin: 5px;
}
.category {
  background-color: #ecad9e;
  width: 200px;
  height: 300px;
}

#title {
  height: 35px;
  background-color: #f4606c;
  text-align: center;
  line-height: 35px;
}
</style>