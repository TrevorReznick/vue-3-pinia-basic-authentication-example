import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores'

import {
    AccountInfoView,
    DashboardView,    
    HomeView,
    LoginView,
    NewPostView,
    PostsView,
    RegisterView,
    SuccessView
} from '@/views'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/account', name: 'AccountInfoView', component: AccountInfoView},
        { path: '/dashboard', name: 'DashboardView', component: DashboardView},
        { path: '/', component: HomeView },
        { path: '/login', component: LoginView },
        { path: '/new-post', name: 'NewPostView', component: NewPostView},
        { path: '/posts', name: 'PostsView', component: PostsView },
        { path: '/register-view', name: 'RegisterView', component: RegisterView },
        { path: '/success', name: 'SuccessView', component: SuccessView }
    ]
})

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/', '/login', '/register-view']
    const authRequired = !publicPages.includes(to.path)
    const auth = useAuthStore()

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath
        return '/'
    }
})
