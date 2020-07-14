import utils from '../utils'

const userInfo = {
  name: 'userInfo',
  namespaced: true,
  state: {
    userId: '',
    userName: '',
    payWays: [
      {
        id: 1,
        name: '零钱'
      }
    ]
  },
  getters: {
    payWayMap (state) {
      return utils.getObjFromArr(state.payWays)
    }
  },
  mutations: {
    setUserInfo (state, value = {}) {
      const { _id, payWays, userName } = value
      state.userId = _id
      state.payWays = payWays
      state.userName = userName
    }
  }
}

export default userInfo
