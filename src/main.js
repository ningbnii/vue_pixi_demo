import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import VuePageStack from 'vue-page-stack'


Vue.config.productionTip = false;
// Vue.use(VuePageStack, {router})
Vue.use(router)
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
