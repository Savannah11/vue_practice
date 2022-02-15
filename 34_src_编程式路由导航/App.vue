<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">Back</button>
        <button @click="forward">Forward</button>
        <button @click="go">go</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中使用a 标签实现页面的跳转 -->
          <!-- 默认转换把router-link为a标签 -->
          <!-- 利用router-link实现路由的切换 -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/about"
            >About</router-link
          >
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home"
            >Home</router-link
          >
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <!-- <h3>此处展示组件 由用户点击的导航决定</h3> -->
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <!-- <About /> -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 不用引入组件   利用vue-router是  vue-router中已经引入并配置好了
// import Home from './components/home.vue'
// import About from './components/about.vue'


export default {
  name: "App",
  // components: {
  //   Home, About
  // },
  methods: {
    back() {
      console.log(this.$router)
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    go() {
      this.$router.go(-2)
    }
  },

}
</script>
//  笔记：
// this.$router.back()
// this.$router.forward()
// this.$router.go(-2)
