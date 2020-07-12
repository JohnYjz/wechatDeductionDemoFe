import Vuex from 'vuex'
import Vue from 'vue'
import UserInfo from './userInfo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    [UserInfo.name]: UserInfo
  }
})

export default store
