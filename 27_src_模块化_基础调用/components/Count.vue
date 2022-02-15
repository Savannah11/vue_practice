<template>
  <div>
    <h1>当前求和结果为：{{ sum }}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <!-- <button @click="add">+</button> -->
    <button @click="add(n)">+</button>

    <button @click="decrease(n)">-</button>
    <button @click="oddAdd(n)">当前求和为奇数再加</button>
    <button @click="delayAdd(n)">等一等再加</button>
    <h3>获取getters中的bigSum</h3>
    <h3>bigSum:{{ bigSum }}</h3>
    <ul v-for="person in personList" :key="person.id">
      <li>{{ person.name }}</li>
      <li>{{ person.age }}</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1

    }
  },
  methods: {
    // add() {
    //   console.log('调用add方法')
    //   // this.$store.commit('countAbout/INCREASE', this.n)
    // }
    ...mapMutations('countAbout', { add: 'INCREASE', decrease: 'DECREASE' }),
    ...mapActions('countAbout', ['oddAdd', 'delayAdd'])
  },
  computed: {
    ...mapState('personAbout', ['personList']),
    ...mapState('countAbout', ['sum']),
    // 注意当自己写mapGetters语句时  跟其他访问形式不一样
    // 对象访问除了.XXX 还有  ['']
    bigSum() { return this.$store.getters['countAbout/bigSum'] }

    // ...mapGetters('countAbout', ['bigSum'])
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style>
</style>