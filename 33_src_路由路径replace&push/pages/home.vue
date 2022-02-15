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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
</style>