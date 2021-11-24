import { createRouter, createWebHashHistory } from 'vue-router'
import * as api from '@/api'
import Home from '../src/pages/feeds/feeds'
import Auth from '../src/pages/auth/auth'
import gallery from '../src/pages/galery/gallery'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/gallery',
    component: gallery,
    name: 'gallery'
  },
  {
    path: '/auth',
    component: Auth,
    name: 'auth'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const autRoute = to.name === 'auth'

  try {
    await api.user.getUserData()
    next(autRoute ? { name: 'Home' } : null)
  } catch (e) {
    if (e.response.status === 401) {
      next(autRoute ? null : { name: 'auth' })
    }
  }
})

export default router
