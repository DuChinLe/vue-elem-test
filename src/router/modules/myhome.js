/*
 * @Description: myhome路由
 * @Author: Duchin/梁达钦
 * @Date: 2019-09-11 17:01:26
 * @LastEditTime: 2019-09-11 18:06:00
 * @LastEditors: Duchin/梁达钦
 */
import Layout from '@/layout/BaseHeader.vue'

const myhome = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/myhome/index',
    children: [
      {
        path: '/myhome/index',
        name: 'myhome/index',
        component: () => import('@/views/myhome/index')
      }
    ]
  }
]

export default myhome
