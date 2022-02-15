<template>
  <div>
    <h1>当前求和结果为：{{ $store.state.sum }}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="decrease(n)">-</button>
    <button @click="oddAdd(n)">当前求和为奇数再加</button>
    <button @click="delayAdd(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1

    }
  },
  methods: {
    //   vuex只实现了加
    // add() {
    //   // this.$store.dispatch('increase', this.n)
    //   this.$store.commit('INCREASE', this.n)
    //   //   this.sum += this.sum + this.n
    // },
    // decrease() {
    //   this.$store.commit('DECREASE', this.n)
    // },
    // 绑定时函数没传参数，则默认传了event对象 {sum+event}
    // ！！！需要传参数时，要在绑定中的函数传参！！！
    // 生成commit方法lian联系mutations(对象写法)
    ...mapMutations({ add: 'INCREASE', decrease: 'DECREASE' }),
    // 数组写法需要名字一致
    oddAdd() {
      this.$store.dispatch('oddAdd', this.n)
      //   if (this.n % 2)
      // this.sum = this.sum + this.n
    },
    delayAdd() {
      this.$store.dispatch('delayAdd', this.n)

    },
    // 生成dispatch方法联系actions
    ...mapActions(['oddAdd', 'delayAdd'])
  }
}
</script>

<style>
</style>