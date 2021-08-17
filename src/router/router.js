import Vue from 'vue'
import Router from "vue-router";
// import Pages from '@/pages/index.js'

// 解决重复点击导航路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/index/index',
    }
];

importPages(require.context('@/pages',true,/.vue$/,'lazy'));

function importPages(r) {
    r.keys().forEach(key=>{
        routes.push({
            path: key.split('.')[1],
            component: (resolve) => {
                r(key).then((module)=>{
                    resolve(module)
                })
            },
        })
    })
}

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes:routes,
    // routes:[
    //     {
    //         path: '/',
    //         name: 'home',
    //         component: Pages.index
    //     },
    //     {
    //         path: '/bobbing',
    //         name: 'bobbing',
    //         component: Pages.bobbing
    //     },
    //     {
    //         path: '/wavel',
    //         name: 'wavel',
    //         component: Pages.wavel
    //     },
    //     {
    //         path: '/pulse',
    //         name: 'pulse',
    //         component: Pages.pulse
    //     },
    //     {
    //         path: '/random',
    //         name: 'random',
    //         component: Pages.random
    //     },
    //     {
    //         path: '/wave2',
    //         name: 'wave2',
    //         component: Pages.wave2
    //     }
    //
    // ]
})
