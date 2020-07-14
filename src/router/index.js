import Vue from 'vue'
import Router from 'vue-router'
import List from '@/webviews/List'
import Detail from '@/webviews/Detail'
import DeductionWay from '@/webviews/DeductionWay'
import RecordList from '@/webviews/RecordList'
import Create from '@/webviews/Create'
import Error from '@/webviews/Error'
import request from '@/api'
import store from '@/webstore'
import axios from '@/api/axios'
import { ORDER_STATE } from '@/constant'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
      props: { orderState: ORDER_STATE.VALID }
    },
    {
      path: '/CloseList',
      name: 'List',
      component: List,
      props: { orderState: ORDER_STATE.CLOSE }
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/DeductionWay',
      name: 'DeductionWay',
      component: DeductionWay
    },
    {
      path: '/RecordList',
      name: 'RecordList',
      component: RecordList
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
    {
      path: '/Error',
      name: 'Error',
      component: Error
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (axios.defaults.headers.userId) {
    next()
    return
  }
  try {
    const userInfo = await request.getUserInfo()
    store.commit('userInfo/setUserInfo', userInfo)
    axios.defaults.headers.userId = userInfo._id
    next()
  } catch (err) {
    next('/Error')
  }
})

export default router
