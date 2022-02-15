<template>
  <div class="container">
    <Count />
    <Person />
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Person from './components/Person.vue'

export default {
  name: "App",
  components: {
    Count, Person
  },
  methods: {
  },

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
h3 {
  text-align: center;
  color: #e6ceac;
}
</style>

