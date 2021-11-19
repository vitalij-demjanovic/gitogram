import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../src/pages/feeds/feeds'
import gallery from '../src/pages/galery/gallery'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Homer'
  },
  {
    path: '/gallery',
    component: gallery,
    name: 'gallery'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
