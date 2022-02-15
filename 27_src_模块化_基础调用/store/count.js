export default {

    namespaced: true, // 准备actions  用于响应组件中的动作
    actions: {
        // actions中没有业务逻辑 直接在原组件中利用commit调用mutation就行
        increase(context, value) {
            // actions中实现复杂业务逻辑
            // 还可 重复多次通过dispatch调用定义的其他actions方法 最后commit
            console.log('actions中的increase方法被调用了')
            context.commit('INCREASE', value)
        },
        oddAdd(context, value) {
            console.log('dispat第一个参数context接收的', context)
            if (value % 2) context.commit('ODDADD', value)
        },
        delayAdd(context, value) {
            setTimeout(() => {
                context.commit('DELAYADD', value)
            }, 2000)
        },
    },
    // 准备mutations  用于操作数据（state）
    mutations: {
        INCREASE(state, value) {
            console.log('actions中的INCREASE方法被调用了')
            // mutations中写状态变化逻辑，开发者工具才能检测到
            state.sum += value
        },
        DECREASE(state, value) {
            console.log('actions中的DECREASE方法被调用了')
            // mutations中写状态变化逻辑，开发者工具才能检测到
            state.sum -= value
        },
        ODDADD(state, value) {
            console.log('actions中的ODDADD方法被调用了')
            // mutations中写状态变化逻辑，开发者工具才能检测到
            state.sum += value
        },
        DELAYADD(state, value) {
            console.log('actions中的DELAYADD方法被调用了')
            // mutations中写状态变化逻辑，开发者工具才能检测到
            state.sum += value
        },

    },
    // 准备state  用于存储数据
    state: {
        sum: 0,
        school: 'gdufs',
        student: 'Ann',

    },
    // getters对state中的数据进行加工
    getters: {
        bigSum(state) {
            return state.sum * 100
        }
    },

}