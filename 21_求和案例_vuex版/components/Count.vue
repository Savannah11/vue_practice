<template>
  <div>
    <h1>当前求和结果为：{{ $store.state.sum }}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="decrease">-</button>
    <button @click="oddAdd">当前求和为奇数再加</button>
    <button @click="delayAdd">等一等再加</button>
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
      this.$store.dispatch('increase', this.n)
      //   this.$store.commit('INCREASE',this.n)
      //   this.sum += this.sum + this.n
    },
    decrease() {
      //   this.sum = this.sum - this.n
    },
    oddAdd() {
      //   if (this.n % 2)
      // this.sum = this.sum + this.n
    },
    delayAdd() {
      setTimeout(
        () => this.sum = this.sum + this.n, 1000)
    },
  }
}
</script>

<style>
</style>