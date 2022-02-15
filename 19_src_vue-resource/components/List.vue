<template>
  <div class="row">
    <h1 v-show="info.isWelc">WELCOME TO GITHUB！</h1>
    <h1 v-show="info.isLoading">Loading</h1>
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    <div
      class="card"
      v-for="user in info.users"
      :key="user.login"
      v-show="info.users"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
  </div>
</template>

<script>
// 1.欢迎页面
// 2.加载页面
// 3.列表页面
// 4.错误页面
export default {
  name: 'List',
  data() {
    return {
      info: {
        isWelc: true,
        isLoading: false,
        users: [],
        errMsg: ''
      }

    }
  },
  mounted() {
    this.$bus.$on('getUser', (dataObj) => {
      console.log('请求成功')
      //   es6扩展语法   通过字面量形式合并 
      // 以后一个为主  重名覆盖  不同合并
      //   注意这里为中括号因为合并成的是一个对象
      this.info = { ...this.info, ...dataObj }
    })
  },
  beforeDestroy() {
    this.$bus.$off('getUser')
  }

}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>