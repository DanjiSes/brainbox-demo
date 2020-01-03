const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/start',
    component: () => import('pages/Start.vue')
  },
  {
    path: '/game',
    component: () => import('pages/Game.vue')
  },
  {
    path: '/timer',
    component: () => import('pages/Timer.vue')
  },
  {
    path: '/level',
    component: () => import('pages/Level.vue')
  },
  {
    path: '/finish',
    component: () => import('pages/Finish.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
