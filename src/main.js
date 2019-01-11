// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import Plugin from './plugin'
import ElementUI from 'element-ui'
import create from '../src/plu/myapi'
import axios from 'axios'
import '../static/css/normalize.css'
// import '../static/css/index.css'
import queryJs from '../src/query.js'
// import '../src/rem.js'
const baseSize = 40;

function setRem() {
    const scale = document.documentElement.clientWidth / 750
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2) + 'px')
}
setRem();
window.onresize = function() {
        setRem();
    }
    // const radio = (40/750)
    // document.documentElement.style.fontSize = radio * window.innerwidth + "px"


// 设置html的font-size
// (function(doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function() {
//             var clientWidth = docEl.clientWidth
//             if (!clientWidth) {
//                 return false
//             }
//             docEl.style.fontSize = 40 * (clientWidth / 750) + 'px'
//         }

//     if (!doc.addEventListener) {
//         return false
//     }
//     win.addEventListener(resizeEvt, recalc, false)
//     doc.addEventListener('DOMContentLoaded', recalc, false)
// })(document, window);
Vue.use(ElementUI, { size: 'mini', zIndex: 3000 });
Vue.use(queryJs);
Vue.prototype.$api = create;
Vue.prototype.$axios = axios;
Plugin(Vue)
Vue.config.productionTip = false
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        fastclick.attach(document.body)
    })
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})