// 该文件专门用于创建整个应用路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../pages/home'
import About from '../pages/about'
// 创建并暴露一个路由器
export default new VueRouter({
    // 注意  是routes 不是routers
    routes: [{
            // 注意 路径开头是/ 没有 ./
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ],
})