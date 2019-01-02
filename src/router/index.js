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
<<<<<<< HEAD
import Winning from '@/pages/Winning'
import Activity from '@/pages/activity'
import NoActivity from '@/pages/noActivity'
import Dowm from '@/pages/dowm'
import Experience from '@/pages/experience'
import Instructions from '@/pages/instructions'
import NewActivity from '@/pages/newActivity'
import Circle from '@/pages/Circle'
=======
import Experience from '@/pages/Experience'
import Lpj from '@/pages/lpj'
import Activity from '@/pages/activity'
import Dowm from '@/pages/dowm'
>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
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
<<<<<<< HEAD
            path: '/Winning',
            name: 'Winning',
            component: Winning
=======
            path: '/experience',
            name: 'experience',
            component: Experience
        },
        {
            path: '/lpj',
            name: 'lpj',
            component: Lpj
>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
        },
        {
            path: '/activity',
            name: 'activity',
            component: Activity
        },
        {
<<<<<<< HEAD
            path: '/noActivity',
            name: 'noActivity',
            component: NoActivity
        },
        {
            path: '/dowm',
            name: 'dowm',
            component: Dowm
        },
        {
            path: '/experience',
            name: 'experience',
            component: Experience
        },
        {
            path: '/instructions',
            name: 'instructions',
            component: Instructions
        },
        {
            path: '/newActivity',
            name: 'newActivity',
            component: NewActivity
        },
        {
            path: '/Circle',
            name: 'Circle',
            component: Circle
=======
            path: '/dowm',
            name: 'dowm',
            component: Dowm
>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
        }
    ]
})