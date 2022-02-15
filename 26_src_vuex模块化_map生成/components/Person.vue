<template>
  <div>
    <h1>人员列表</h1>
    <input
      type="text"
      placeholder="please enter your name"
      v-model="inputName"
    />
    <input
      type="number"
      placeholder="please enter your age"
      v-model.number="inputAge"
    />
    <button @click="addPerson(personObj)">确认</button>
    <ul v-for="person in personList" :key="person.id">
      <li>{{ person.name }}</li>
      <li>{{ person.age }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Person',
  data() {
    return {
      inputName: '',
      inputAge: 0,
    }
  },
  methods: {
    //   绑定事件要将数据存储到store仓库时，事件调用函数要传递对象
    // addPerson() {
    //   this.$store.commit(this.personObj)
    //   //   this.$store.state.personList.push({ id: nanoid, name: this.inputName, age: inputAge })

    // },
    ...mapMutations('personAbout', { addPerson: 'ADDPERSON' })
  },
  computed: {
    ...mapState('personAbout', ['personList']),
    personObj() {
      return { id: nanoid(), name: this.inputName, age: this.inputAge }
    }
  }

}
</script>

<style>
</style>