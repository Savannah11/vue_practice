<template>
  <h2>我是about的内容</h2>
</template>

<script>
// 路由组件通常存放在pages文件夹（以区分普通组件）
// 切换路由,隐藏的路由组件默认被销毁,需要的时候再挂载
// 每个组件都有自己的$route属性 ，里面存着自己的路由信息 different
// 整个应用只有一个router，可以通过组建的$router属性获取到  same
export default {
  name: 'About',
  mounted() {
    console.log('about挂载完毕')

  },
  beforeDestroy() {
    console.log('about即将被销毁')
  }
}
</script>

<style>
</style>