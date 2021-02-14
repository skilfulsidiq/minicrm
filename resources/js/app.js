
require('./bootstrap');
import Vue from 'vue';
import App from './App.vue'
import component from './components/component';

import router from "./router";
import ApiService from './services/ApiService';
import { TokenService } from './services/TokenService';
import store from "./store";

// import vuetify from "./plugins/vuetify";
ApiService.init('/api/');
if (TokenService.getToken()) {
    ApiService.setHeader()
}
const app = new Vue({
    router,
    store,
    // vuetify,
    el: '#app',
    render: h => h(App)

});
