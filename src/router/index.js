import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs"
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
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router