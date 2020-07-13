import axios from './axios'

export default {
  getUserInfo () {
    return axios.get('/user/info')
  },
  createDeduction (data) {
    return axios.post('/order/create', data)
  },
  editDeductionWay (data) {
    return axios.post('/order/edit', data)
  },
  getDeductionOrders () {
    return axios.get('/order/list/valid')
  },
  getDeductionCloseOrders () {
    return axios.get('/order/list/close')
  },
  getDeductionOrderDetail (params) {
    return axios.get('/order/detail', { params })
  },
  getDeductionRecordsByOrderId (params) {
    return axios.get('/order/record/list', { params })
  },
  closeOrder (params) {
    return axios.get('/order/close', { params })
  }
}
