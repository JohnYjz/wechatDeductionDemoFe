import axios from './axios'

export default {
  getUserInfo () {
    return axios.get('/login')
  },
  createDeduction (data) {
    return axios.post('/create', data)
  },
  editDeductionWay (data) {
    return axios.post('/deduction/edit', data)
  },
  getDeductionOrders () {
    return axios.get('/deductionList')
  },
  getDeductionRecordsByOrderId (params) {
    return axios.get('/deductionRecordList', { params })
  },
  closeOrder (params) {
    return axios.get('/closeOrder', { params })
  }
}
