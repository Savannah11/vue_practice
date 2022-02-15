<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="inputValue"
      />&nbsp;<button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      inputValue: '',

    }
  },
  methods: {
    searchUser() {
      console.log(this.inputValue)
      //   请求前更新List
      this.$bus.$emit('getUser', { isWelc: false, isLoading: true, users: [], errMsg: '' })
      axios.get('https://api.github.com/search/users?q=' + this.inputValue).then(
        response => {
          console.log(response.data)
          //   请求成功更新List
          this.$bus.$emit('getUser', { isLoading: false, users: response.data.items, errMsg: '' })
        },
        error => {
          // 请求失败更新List
          console.log(error.message)
          this.$bus.$emit('getUser', { users: [], errMsg: error.message })
        }
      )
    }
  },
  mounted() {

  }


}
</script>

<style>
</style>