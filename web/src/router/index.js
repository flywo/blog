import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // 用户端
    {
        path: "/user-layout",
        component: () =>
            import ("@/views/front/layout/Layout.vue"),
        children: [{
            path: "/home",
            component: () =>
                import ("@/views/front/home/Home.vue")
        }, {
            path: "/content",
            component: () =>
                import ("@/views/front/content/Content.vue")
        }]
    },
    // 管理登录
    {
        path: "/admin-login",
        component: () =>
            import ("@/views/admin/login/Login.vue")
    },
    // 管理列表
    {
        path: "/admin-list",
        component: () =>
            import ("@/views/admin/list/List.vue")
    },
    // 编辑文章
    {
        path: "/admin-edit",
        component: () =>
            import ("@/views/admin/edit/Edit.vue")
    },
    // markdown帮助页面
    {
        path: "/help",
        component: () =>
            import ("@/views/admin/help/Help.vue")
    },
    // 重定向到首页
    {
        path: "/",
        redirect: "/home",
    },
    // 404
    {
        path: "*",
        component: () =>
            import ("@/views/404/404.vue"),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router