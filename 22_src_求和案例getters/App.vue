<template>
  <div class="container">
    <Count />
  </div>
</template>

<script>
import Count from './components/Count.vue'
export default {
  name: "App",
  components: {
    Count
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

