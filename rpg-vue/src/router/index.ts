import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import ChagelogView from '../views/ChangelogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: ChagelogView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    }
  ]
})

export default router
