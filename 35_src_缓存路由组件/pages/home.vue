<template>
  <div>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/home/news"
          >News</router-link
        >
        <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
      </li>
      <li>
        <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
        <router-link
          class="list-group-item"
          active-class="active"
          to="/home/message"
          >Message</router-link
        >
      </li>
    </ul>
    <!-- 缓存路由组件  在要被缓存组件的父亲上面写keep alive -->
    <!-- 缓存多个路由组件 include="['News','Message'] -->
    <keep-alive include="News">
      <!-- include指定的是【组件名】 -->
      <!-- keep-alive 中的内容全部被缓存 不会被销毁 -->
      <!-- include属性标识  只有include中的不会被销毁 其他组件依然被销毁 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
</style>