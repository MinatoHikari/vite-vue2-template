import Vue from 'vue';
import { initAnt } from '@/ant';
import App from '@/App.vue';

import 'uno.css';
import router from '@/router';

Vue.config.productionTip = false;
Vue.config.devtools = true;
initAnt();

new Vue({
    router,
    render: () => h(App),
}).$mount('#app');
