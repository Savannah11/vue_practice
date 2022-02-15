// 该文件专门用于创建整个应用路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../pages/home'
import About from '../pages/about'
import News from '../pages/news'
import Message from '../pages/message'
import Detail from '../pages/detail'


// 创建并暴露一个路由器
const router = new VueRouter({
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
                        // path: 'detail/:id/:msg',
                        path: 'detail',
                        component: Detail,
                        props(route) {
                            return {
                                id: route.query.id,
                                msg: route.query.msg
                            }
                        }
                    }]
                },
            ]
        }
    ],
})
// 默认全部防卫
router.beforeEach((to, from, next) => {
    console.log(to, from)
    // console.log(this)
    // name也可以
    if (to.path === '/home/news' || to.path === '/home/message') {
        // 疑问：如何利用vuex 获取store中的数据
        const id = localStorage.getItem('userName') // 判断用户是否有权限访问
        if (id === 'VIP') {
            next()
        } else {
            alert('您无权访问')
        }
    } else {
        next()
    }
})
export default router