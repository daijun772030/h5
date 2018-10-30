import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import User from '@/pages/user'
import All from '@/pages/all'
import Law from '@/pages/law'
import Privacy from '@/pages/privacy'
import Agreement from '@/pages/agreement'
import Rule from '@/pages/rule'
import BusinessCode from '@/pages/businessCode'
import Experience from '@/pages/Experience'
import Lpj from '@/pages/lpj'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'User',
            component: User
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/all',
            name: 'All',
            component: All
        },
        {
            path: '/law',
            name: 'law',
            component: Law
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: Privacy
        },
        {
            path: '/agreement',
            name: 'agreement',
            component: Agreement
        },
        {
            path: '/rule',
            name: 'rule',
            component: Rule
        },
        {
            path: '/businessCode',
            name: 'businessCode',
            component: BusinessCode
        },
        {
            path: '/experience',
            name: 'experience',
            component: Experience
        },
        {
            path: '/lpj',
            name: 'lpj',
            component: Lpj
        }
    ]
})