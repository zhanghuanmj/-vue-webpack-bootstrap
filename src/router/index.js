import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import YearKeyTasks from '@/components/planManage/YearKeyTasks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/YearKeyTasks',
      name: 'YearKeyTasks',
      component: YearKeyTasks
    }
  ]
})
