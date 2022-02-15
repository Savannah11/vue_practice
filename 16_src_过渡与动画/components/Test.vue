<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 没有实际的transition标签 给vue用的 -->
    <transition name="hello" :appear="true">
      <!--也可以直接写appear -->
      <h1 v-show="isShow" class="come">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      isShow: true
    }
  },

};
</script>

<style scoped>
h1 {
  background-color: rgb(248, 227, 203);
}
/* .come {
  animation: move 1s linear;
} */
.hello-enter-active {
  animation: move 1s linear;
}
.hello-leave-active {
  animation: move 1s linear reverse;
}
/* 定义一个动画 */
@keyframes move {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
