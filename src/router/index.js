import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Home', component: ()=>import('../views/Home/home.vue'),
        meta: {
            title: 'Rockfit - Home'
        }
    },
    {
        path: '/search',
        name: 'Search', component: ()=>import('../views/Home/search.vue'),
        meta: {
            title: 'Rockfit - Search'
        }
    },
    {
        path: '/saved',
        name: 'Saved', component: ()=>import('../views/Home/saved.vue'),
        meta: {
            title: 'Rockfit - Saved'
        }
    },
    {
        path: '/profile',
        name: 'Profile', component: ()=>import('../views/Home/profile.vue'),
        meta: {
            title: 'Rockfit - Profile'
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
