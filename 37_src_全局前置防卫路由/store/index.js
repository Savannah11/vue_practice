import Vue from 'vue'
import Vuex from 'vuex'


const userRouter = {
    namespaced: true,
    actions: {

    },
    mutations: {

    },
    state: {
        userName: 'VIP',
    }
}
Vue.use(Vuex)
export default new Vuex.Store({
    userRouter
})