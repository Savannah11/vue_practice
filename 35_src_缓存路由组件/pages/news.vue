<template>
  <div>
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  beforeDestroy() {
    console.log('nes组件要被销毁了')
  }
}
</script>

<style>
</style>