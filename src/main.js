import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import VueCookies from 'vue-cookies';
import { createPinia } from 'pinia';
import '@/style.css';
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// import echo from './websockets';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(VueCookies);
app.use(router);
app.component("v-select", VueSelect)
app.mount('#app');

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true});