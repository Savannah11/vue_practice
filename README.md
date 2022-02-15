# vue_test

## Project setup

``` javascript
npm install
```

### Compiles and hot-reloads for development

``` javascript
npm run serve
```

### Compiles and minifies for production

``` javascript
npm run build
```

### Lints and fixes files

``` javascript
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 脚手架文件架构

## 不同版本的Vue

## vue.config.js可以对脚手架进行个性设定

## 1.组件化编码流程

### （1）拆分静态组件：组件按照功能点拆分

### （2）实现动态组件：考虑好数据存放的形式、位置，数据是在一个组件 还是多个组件使用

#### 1）一个组件：放在组件自身

#### 2）多个组件：放在共同的父组件上（状态提升）

## 2.props适用于

### （1） 父组件 ==> 子组件通信

### （2） 子组件 ==> 父组件通信 （要求父先给子一个函数）

## 3.使用v-model 切记

### v-model的值不能是props传过来的，因为props不可以修改

## 4.props传过来若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做

<br>

## 1.一种组件间的通信方式 适用于：子组件 ===>父组件

### （1）使用场景：子B给父A传数据 在A中给B绑定自定义事件 (事件的回调在A中)

## 绑定自定义事件2种方式 （触发一次使用$once  或者 .once

## 触发、解绑自定义事件

## 组件上绑定原生DOM  使用native修饰符

## 绑定自定义事件，回调应在methods中配置，或者使用剪头函数 否则 this 容易出现问题

``` javascript
this.$refs.xxx.$on('selfDefine',回调)

```

## 全局事件总线 适用于任意组件间的通信

## 消息订阅与发布 适用于任意组件间的通信

### 安装 npm i pubsub-js  需要引入

### 订阅组件里的beforeDestroy中取消订阅