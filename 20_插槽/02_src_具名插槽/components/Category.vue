<template>
  <div class="category">
    <h3 id="title">{{ this.title }}分类</h3>
    <!-- 定义一个插槽 挖个坑等着【标签模板 组件里的内容】填充 -->
    <slot name="center"
      >我是一个插槽，默认值，使用者没有传具体结构给我，我就出来啦嘻嘻~</slot
    >
    <slot name="footer"
      >我是一个插槽，默认值，使用者没有传具体结构给我，我就出来啦嘻嘻~</slot
    >

    <!-- <ul v-for="item in this.dataList" :key="item.index">
      <li>{{ item }}</li>
    </ul>
    <img
      v-show="title === 'food'"
      src="https://t7.baidu.com/it/u=760837404,2640971403&fm=193&f=GIF"
      alt="美食"
    /> -->
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title']

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
ul > li {
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