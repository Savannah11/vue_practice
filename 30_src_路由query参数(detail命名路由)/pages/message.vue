<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- <router-link to="/home/message/detail?id=666&msg='hello'">{{
          m.msg
        }}</router-link> -->
        <!-- 跳转路由携带query参数 to的模板字面量写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&msg=${m.msg}`">{{
          m.msg
        }}</router-link> -->

        <!-- 跳转路由携带query参数 to的模板字面量写法 -->
        <!-- path: '/home/message/detail', -->
        <router-link
          :to="{
            name: 'detail',
            query: {
              id: m.id,
              msg: m.msg,
            },
          }"
          >{{ m.msg }}</router-link
        >
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

}
</script>

<style>
</style>