// 该文件用于创建Vue中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'
// 准备actions  用于响应组件中的动作
const actions = {
    // actions中没有业务逻辑 直接在原组件中利用commit调用mutation就行
    increase(context, value) {
        // actions中实现复杂业务逻辑
        // 还可 重复多次通过dispatch调用定义的其他actions方法 最后commit
        console.log('actions中的increase方法被调用了')
        context.commit('INCREASE', value)
    }
}
// 准备mutations  用于操作数据（state）
const mutations = {
    INCREASE(state, value) {
        console.log('actions中的INCREASE方法被调用了')
        // mutations中写状态变化逻辑，开发者工具才能检测到
        state.sum += value
    }
}
// 准备state  用于存储数据
const state = {
    sum: 0,
}
// getters对state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 100
    }
}
// 创建store前需要引入vuex
Vue.use(Vuex)
// 创建store
export default new Vuex.Store({
    // 记得导出getters
    actions,
    mutations,
    state,
    getters
})