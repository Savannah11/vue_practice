export default {
    // install后面还能传多个参数
    install(Vue) {
        console.log('@@@install', Vue)
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
        // 全局指令
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令元素被插入页面时
            inserted(element, binding) {
                element.focus() //页面绑定后，input还未出现在页面中，不能focus
            },
            // 指令所在的模板被更新解析时
            update(element, binding) {
                element.value = binding.value

            }
        })
        // 定义混入
        Vue.mixin({

            methods: {
                showName() {
                    alert(this.schoolName);
                },
            },
            mounted() {
                console.log("hello,I'm from mounted")
            },
        })
        // 给Vue原型上添加一个hello属性（vm和vc都能用）
        Vue.prototype.hello = '你好'
    }
}