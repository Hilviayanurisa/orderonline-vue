import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Start_screen from '../components/view/start-screen.vue'
import Login from '../components/view/login.vue'
import Verifikasi from '../components/view/verifikasi.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/startscreen',
        name: 'start-screen',
        component: Start_screen
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/verifikasi',
        name: 'verifikasi',
        component: Verifikasi
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router