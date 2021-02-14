
require('./bootstrap');
import Vue from 'vue';
import App from './App.vue'
import component from './components/component';

import router from "./router";
import store from "./store";
// import vuetify from "./plugins/vuetify";

const app = new Vue({
    router,
    store,
    // vuetify,
    el: '#app',
    render: h => h(App)

});
