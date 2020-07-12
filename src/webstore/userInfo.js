import utils from '../utils'

const userInfo = {
  name: 'userInfo',
  namespaced: true,
  state: {
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
  }
}

export default userInfo
