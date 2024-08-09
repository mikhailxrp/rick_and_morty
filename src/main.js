import { createApp } from 'vue';
import { router } from './router';
import { createPinia } from 'pinia';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import App from './App.vue';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
