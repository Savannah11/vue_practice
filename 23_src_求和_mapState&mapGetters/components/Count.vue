<template>
  <div>
    <h1>当前求和结果为：{{ $store.state.sum }}</h1>
    <h3>{{ student }}</h3>
    <h3>{{ school }}</h3>

    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add">+</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
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

  },
  computed: {
    sum() {
      return this.$store.state.sum

    },
    // student() {

    // },
    // school() {

    // }
    // bigSUm(){

    // mapState生成计算属性  从state中获取 对象写法
    // ...扩展语法 扩展为对象
    // school值为字符串 不能直接简写成school
    // 一个包含函数的对象
    // ...mapState({ school: 'school', student: 'student' })

    // mapState生成计算属性  从state中获取 数组写法(属性也为字符串形式) 名字要和store中的名字保持一致
    ...mapState(['school', 'student']),

    // mapGetters生成计算属性  从getters中获取 对象写法
    // ...mapGetters({ bigSum: 'bigSum' }),

    // mapGetters生成计算属性  从getters中获取 数组写法
    ...mapGetters(['bigSum'])



  },
  mounted() {
    const x = mapState
    console.log(x)
  }
}
</script>

<style>
</style>