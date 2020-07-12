import axios from './axios'

export default {
  getUserInfo () {
    return axios.get('/login')
  },
  createDeduction (data) {
    return axios.post('/create', data)
  }
}
