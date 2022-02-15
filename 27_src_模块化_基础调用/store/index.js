// 该文件用于创建Vue中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'
import countAbout from './count'
import personAbout from './person'



// 创建store前需要引入vuex
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        countAbout: countAbout,
        personAbout: personAbout,

    }
})