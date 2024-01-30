import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies';
import { createPinia } from 'pinia';
import './style.css';
import axios from 'axios';
// import echo from './websockets';

const pinia = createPinia();

const app = createApp(App);

const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});


app.config.globalProperties.$axios = instance;


app.use(pinia);
app.use(VueCookies);
app.use(router);
app.mount('#app');