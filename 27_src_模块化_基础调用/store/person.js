import axios from 'axios'
import {
    nanoid
} from 'nanoid'
export default {
    namespaced: true, // 准备actions  用于响应组件中的动作
    actions: {
        // 从服务器利用axios请求数据
        addServerPerson(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADDPERSON', {
                        id: nanoid(),
                        name: response.data,
                        age: 67
                    })
                },
                error => {
                    alert(error)
                }
            )
        }
    },
    // 准备mutations  用于操作数据（state）
    mutations: {
        ADDPERSON(state, value) {
            console.log('actions中的ADDPERSON方法被调用了')
            state.personList.push(value)
            console.log(state.personList)
        },

    },
    // 准备state  用于存储数据
    state: {
        school: 'gdufs',
        student: 'Ann',
        personList: [{
                id: '001',
                name: 'Ann',
                age: 18
            },
            {
                id: '002',
                name: 'Ben',
                age: 20
            },
            {
                id: '003',
                name: 'Calin',
                age: 34
            }

        ]
    },
    // getters对state中的数据进行加工
    getters: {},
}