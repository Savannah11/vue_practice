<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
// 公共资源 引用了第三方库  可以放在public中
// bootstrap中引用了字体资源  找不到资源  import会做严格地检查
// import './assets/CSS/bootstrap.css'
import Search from './components/Search.vue'
import List from './components/List.vue'

export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    Search, List
  },
  methods: {
  }

}
</script>

<style>
</style>

