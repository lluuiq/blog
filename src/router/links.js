import Home from "@/views/Home";

const links = [
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
            {
                path: '/post/:category/:title',
                name: 'Post',
                component: () => import('@/views/Post.vue')
            },
        ]
    }
]

export default links;
