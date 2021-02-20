import Vue from 'vue'
import VueRouter from 'vue-router'
import links from "@/router/links";

Vue.use(VueRouter)

const routes = links

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
    document.documentElement.scrollTop = 0
    next();
})

router.afterEach(() => {

})

export default router
