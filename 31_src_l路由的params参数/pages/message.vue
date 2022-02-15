<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}/${m.msg}`">{{
          m.msg
        }}</router-link>

        <!-- params的对象写法只能用name 不能用path -->
        <router-link
          :to="{
            name: 'detail',
            params: {
              id: m.id,
              msg: m.msg,
            },
          }"
          >params传{{ m.msg }}</router-link
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