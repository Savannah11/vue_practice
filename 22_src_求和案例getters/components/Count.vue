<template>
  <div>
    <h1>当前求和结果为：{{ $store.state.sum }}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add">+</button>
    <h3>获取getters中的bigSum</h3>
    <h3>bigSum:{{ $store.getters.bigSum }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      n: 1

    }
  },
  methods: {
    //   vuex只实现了加
    add() {
      console.log(this.$store.getters.bigSum)
      this.$store.dispatch('increase', this.n)
    },
  }
}
</script>

<style>
</style>