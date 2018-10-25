import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin'
import listTable from '@/components/listTable'
import order from '@/components/content'
import kitchen from '@/components/kitchen'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'client',
      component: listTable,
      meta: {
        requiresTable: true
      }
    },
    {
      path: '/order/:userId/:num',
      name: 'order',
      component: order
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      component: kitchen
    }
  ]
})
export default router
