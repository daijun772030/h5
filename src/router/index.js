import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import APP from '@/App'
import Home from '@/pages/home'
import User from '@/pages/user'
import All from '@/pages/all'
import Law from '@/pages/law'
import Privacy from '@/pages/privacy'
import Agreement from '@/pages/agreement'
import Rule from '@/pages/rule'
import BusinessCode from '@/pages/businessCode'
import Winning from '@/pages/Winning'
import Activity from '@/pages/activity'
import NoActivity from '@/pages/noActivity'
import Dowm from '@/pages/dowm'
import Experience from '@/pages/experience'
import Instructions from '@/pages/instructions'
import NewActivity from '@/pages/newActivity'
import Circle from '@/pages/Circle'
import Share from '@/pages/share'
import Order from '@/pages/order'
import WechatH5 from '@/pages/WechatH5'
import CarveMoney from '@/pages/carveMoney'
import ShareSuccess from '@/pages/shareSuccess'
import NullMessage from '@/pages/nullMessage'
// import Lpj from '@/pages/lpj'
Vue.use(Router)
const scrollBehavior = (to, from, savedPosition) => {
    // SavedPosition is only available for popstate navigations.
    if (savedPosition) {
        return savedPosition
    } else {
        let position = {}
            // If no children detected
        if (to.matched.length < 2) {
            // Scroll to the top of the page
            position = { x: 0, y: 0 }
        } else if (to.matched.some((r) => r.components.default.scrollToTop)) {
            // If one of the children has scrollToTop option set to true
            position = { x: 0, y: 0 }
        }
        // If link has anchor, scroll to anchor by returning the selector
        if (to.hash) {
            position = { selector: to.hash }
        }
        return position
    }
}
export default new Router({
    mode: 'history',
    base: '/shangjie/H5static/', //项目的根名称 如：localhost:3000/sangjie/panel/index
    linkActiveClass: 'b-link-active',
    linkExactActiveClass: 'b-c-link-active',
    routes: [{
        path: '/',
        name: 'app',
        component: APP,
        redirect: '/user',
        children: [{
                path: '/user',
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
                path: '/Winning',
                name: 'Winning',
                component: Winning
            },
            {
                path: '/experience',
                name: 'experience',
                component: Experience
            },
            {
                path: '/activity',
                name: 'activity',
                component: Activity
            },
            {
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
            },
            {
                path: '/share',
                name: 'share',
                component: Share
            },
            {
                path: '/order',
                name: 'order',
                component: Order
            },
            {
                path: '/wechatH5',
                name: 'wechatH5',
                component: WechatH5
            },
            {
                path: '/carveMoney',
                name: 'carveMoney',
                component: CarveMoney
            },
            {
                path: '/shareSuccess',
                name: 'shareSuccess',
                component: ShareSuccess
            },
            {
                path: '/nullMessage',
                name: 'nullMessage',
                component: NullMessage
            }
        ]
    }]
})