<template>
  <div>
    <h1>当前求和结果为：{{ sum }}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="decrease(n)">-</button>
    <button @click="oddAdd(n)">当前求和为奇数再加</button>
    <button @click="delayAdd(n)">等一等再加</button>
    <ul v-for="person in personList" :key="person.id">
      <li>{{ person.name }}</li>
      <li>{{ person.age }}</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1

    }
  },
  methods: {
    ...mapMutations('countAbout', { add: 'INCREASE', decrease: 'DECREASE' }),
    // // 数组写法需要名字一致
    // oddAdd() {
    //   this.$store.dispatch('oddAdd', this.n)
    //   //   if (this.n % 2)
    //   // this.sum = this.sum + this.n
    // },
    // delayAdd() {
    //   this.$store.dispatch('delayAdd', this.n)

    // },
    // 生成dispatch方法联系actions
    ...mapActions('countAbout', ['oddAdd', 'delayAdd'])
  },
  computed: {
    ...mapState('personAbout', ['personList']),
    ...mapState('countAbout', ['sum'])
  }
}
</script>

<style>
</style>