<template>
  <div>
    <h3>should be dynamic data</h3>
    <ul>
      <li>{{ id }}-{{ msg }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {


    }
  },
  mounted() {
    console.log(this.$route)
    console.log(this.$route.query.id)
  },
  computed: {
    id() {
      return this.$route.query.id
    },
    msg() {
      return this.$route.query.msg
    }
  }
}
</script>

<style>
</style>