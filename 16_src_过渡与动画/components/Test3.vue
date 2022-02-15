<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__tada"
      leave-active-class="animate__bounceOutDown"
    >
      <h1 v-show="isShow" key="3">你好啊！</h1>
      <h1 v-show="isShow" key="4">小可爱！</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css';
export default {
  name: 'Test3',
  data() {
    return {
      isShow: true
    }
  },

};
</script>

<style scoped>
h1 {
  text-align: center;
  color: rgb(197, 144, 247);
  /* background-color: rgb(121, 68, 170); */
}
</style>
