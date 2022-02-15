<template>
  <div id="root">
    <button @click="getStudentInfo">获取学生信息</button>
    <button @click="getCarInfo">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  data() {
    return {
    };
  },
  methods: {
    // 跨域： 协议名 主机名 端口 不同
    // 解决跨域问题CORS
    getStudentInfo() {
      axios.get('http://localhost:8080/api/students').then(
        // 8080代理服务器有的数据 不会转发请求到5000服务器
        // public中即为8080服务器中的数据 
        // 默认返回index.html
        response => {
          console.log('请求成功', response.data)
        },
        error => {
          console.log('请求失败', error.message)
        }
      )
    },
    getCarInfo() {
      axios.get('http://localhost:8080/demo/cars').then(
        // 8080代理服务器有的数据 不会转发请求到5000服务器
        // public中即为8080服务器中的数据 
        // 默认返回index.html
        response => {
          console.log('请求成功', response.data)
        },
        error => {
          console.log('请求失败', error.message)
        }
      )
    },
  }

}
</script>

