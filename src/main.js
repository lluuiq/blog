import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'

// 导入个人配置
import config from '@/config/config';

Vue.prototype.config = config

// 导入友链配置
import friends from "@/config/friends";

Vue.prototype.friends = friends.friends

// 导入导航页配置
import navigation from "@/config/navigation";

Vue.prototype.navigation = navigation.navigation


Vue.config.productionTip = false


// 修改网站标题
Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = el.dataset.title
    }
})

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')
