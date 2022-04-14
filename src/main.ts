import Vue from 'vue';
import { createApp, h } from 'vue-demi';
import VueCompositionApi from '@vue/composition-api';
import { initAnt } from '@/ant';
import App from '@/App.vue';

import 'windi.css';
import router from '@/router';

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;
Vue.config.devtools = true;
initAnt();

const app = createApp({
    router,
    render: () => h(App),
});

app.mount('#app');
