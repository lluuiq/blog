import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/blogs',
        children: [
            {
                path: '/blogs',
                name: 'Blogs',
                component: () => import('@/views/Blogs.vue')
            },
            {
                path: '/archive',
                name: 'Archive',
                component: () => import('@/views/Archive.vue')
            },
            {
                path: '/time-line',
                name: 'TimeLine',
                component: () => import('@/views/TimeLine.vue')
            },
            {
                path: '/friends',
                name: 'Friends',
                component: () => import('@/views/Friends.vue')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
