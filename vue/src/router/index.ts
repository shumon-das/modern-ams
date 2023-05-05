import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AmsSteps from "@/components/micro/AmsSteps.vue";
import LogIn from "@/components/LogIn.vue";
import AmsModal from "@/components/micro/AmsModal.vue";
import AmsSelect from "@/components/micro/AmsSelect.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/steps',
      name: 'steps',
      component: AmsSteps
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/modal',
      name: 'modal',
      component: AmsModal
    },
    // {
    //   path: '/select',
    //   name: 'select',
    //   component: AmsSelect
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/select',
      name: 'select',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/micro/AmsSelect.vue')
    }
  ]
})

export default router
