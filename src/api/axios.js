import axios from 'axios'
import weui from 'weui.js'

const instance = axios.create({
  baseURL: 'http://localhost:8080/'
})

instance.defaults.timeout = 2500

let loading = null

instance.interceptors.request.use(function (config) {
  if (!config.silent) {
    loading = weui.loading()
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  const { status, data: responseBody, headers } = response
  if (loading) loading.hide()
  if (status !== 200) {
    const errorReason = 'status非200错误'
    weui.toast(`出错:${errorReason}`, 2000)
    return Promise.reject(errorReason)
  }
  if (!/application\/json/.test(headers['content-type'])) {
    return responseBody
  }
  const { code, data, message } = responseBody
  if (code !== 0) {
    weui.toast(`出错:${message}`, 2000)
    return Promise.reject(message)
  }
  return data
}, function (error) {
  if (loading) loading.hide()
  weui.toast(`出错:${error}`, 2000)
  return Promise.reject(error)
})

export default instance
