import Vue from 'vue'
import Router from 'vue-router'
import List from '@/webviews/List'
import Detail from '@/webviews/Detail'
import DeductionWay from '@/webviews/DeductionWay'
import RecordList from '@/webviews/RecordList'
import Create from '@/webviews/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
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
    }
  ]
})
