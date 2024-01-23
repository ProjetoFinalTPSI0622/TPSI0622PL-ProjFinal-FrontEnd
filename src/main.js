import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies';
import { createPinia } from 'pinia';
import FlagIcon from 'vue-flag-icon'
import './style.css';
import echo from './websockets';


const pinia = createPinia();

const app = createApp(App);

app.use(FlagIcon);
app.use(pinia);
app.use(VueCookies);
app.use(router);
app.config.globalProperties.$echo = echo;
app.mount('#app');