import Vue from 'vue';
import App from './App.vue';
import VueSocketIO from 'vue-socket.io';
import '@/assets/css/app.css';
import VueFrappe from 'vue2-frappe';

Vue.use(
    new VueSocketIO({
        debug: true,
        connection: 'http://localhost:3000'
    })
);
Vue.use(VueFrappe);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
