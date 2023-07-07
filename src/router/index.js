import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Home', component: ()=>import('../views/HomeView.vue'),
        meta: {
            title: 'Rockfit'
        }
    },
    {
        path: '/login',
        name: 'Login', component: ()=>import('../views/LoginView.vue'),
        meta: {
            title: 'Rockfit - Login'
        }
    },
    {
        path: '/signup',
        name: 'Signup', component: ()=>import('../views/SignUpView.vue'),
        meta: {
            title: 'Rockfit - Signup'
        }
    }
  ]
})

export default router
