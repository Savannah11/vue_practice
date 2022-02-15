<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        { id: '001', msg: '消息1' },
        { id: '002', msg: '消息2' },
        { id: '003', msg: '消息3' },


      ]
    }
  },
  methods: {
    //   编程式路由导航  代替router-link
    pushShow(m) {
      //   console.log(this.$router)
      this.$router.push({
        name: 'detail',
        query: {
          id: m.id,
          msg: m.msg
        }
      }).catch(err => console.log('你点击了当前页面的路径（重复）'))
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'detail',
        query: {
          //   id: this.messageList.id,
          //   msg: this.messageList.msg
          id: m.id,
          msg: m.msg
        }
      }).catch(err => console.log('你点击了当前页面的路径（重复）'))
    }
  },
  beforeDestroy() {
    console.log('message组件要被销毁了')
  }

}
</script>

<style>
</style>