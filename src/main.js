import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies';
import { createPinia } from 'pinia';
import './style.css';
// import echo from './websockets';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(VueCookies);
app.use(router);
app.mount('#app');