import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        // 路由重定向
        path: "/",
        redirect: "/blog/home"
    },
    {
        path: "/blog",
        component: () => import("../views/layout/layOut.vue"),
        children: [
            {
                path: "home",
                component: () => import("../views/homeview.vue")
            },
            {
                path: "about",
                component: () => import("../views/about.vue")
            },
            {
                path: "article",
                component: () => import("../views/article.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router