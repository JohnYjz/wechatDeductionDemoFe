// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/webstore'
import utils from '@/utils'
import router from './router'
import weui from 'weui.js'
import request from '@/api'
import filters from '@/utils/filters'
import '@/style/index.less'
import 'weui'

Vue.config.productionTip = false
Vue.prototype.$loading = weui.loading
Vue.prototype.$confirm = weui.confirm
Vue.prototype.$utils = utils
Vue.prototype.$request = request

const filterNames = Object.keys(filters)
filterNames.forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
