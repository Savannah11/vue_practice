// 该文件专门用于创建整个应用路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../pages/home'
import About from '../pages/about'
import News from '../pages/news'
import Message from '../pages/message'
import Detail from '../pages/detail'



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
            component: Home,
            children: [{
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [{
                        // 给路由器取名 ，多级路由路径可直接访问名字
                        name: 'detail',
                        // 用params传参数时，配置占位符
                        path: 'detail/:id/:msg',
                        // path: 'detail',
                        component: Detail,
                        // 写在哪传给谁
                        // props的第一种写法 值为【对象】  静态数据
                        // 以 props形式 传给Detail组件

                        // props: {
                        //     a: 1,
                        //     b: 2,
                        // },

                        // props的第二种写法，值为【布尔值】，把该路由组件收到的所有【params】参数，以props的形式传给Detail组件
                        // 不接受query参数
                        // props: true,

                        // props的第三种写法  值为【函数】 这是一个回调函数 VueRouter会调用
                        // props(route) {
                        //     return {
                        //         id: route.query.id,
                        //         msg: route.query.msg
                        //     }
                        // }
                        // params prop函数写法
                        props($route) {
                            return {
                                id: $route.params.id,
                                msg: $route.params.msg
                            }
                        }

                        // 连续解构赋值
                        // props({
                        //     query: {
                        //         id,
                        //         msg
                        //     }
                        // }) {
                        //     return {
                        //         id,
                        //         msg
                        //     }
                        // }
                    }]
                },
            ]
        }
    ],
})