<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 没有实际的transition标签 给vue用的 -->
    <transition name="hello" appear>
      <h1 v-show="isShow" class="come">你好啊！</h1>
    </transition>
    <!-- 多个元素 -->
    <transition-group name="hello" appear>
      <h1 v-show="isShow" class="come" key="1">你好啊！</h1>
      <h1 v-show="isShow" class="come" key="2">你好啊！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      isShow: true
    }
  },

};
</script>

<style scoped>
h1 {
  background-color: rgb(241, 219, 205);
}
/* .come {
  animation: move 1s linear;
} */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-leave,
.hello-enter-to {
  transform: translateX(0);
}
/* 过渡效果 */
.hello-enter-active,
.hello-leave-active {
  transition: 1s linear;
}
</style>
