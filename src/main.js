import { createApp } from 'vue';
import '../public/css/tailwind.css';
import App from './App.vue';
import router from './router';

// Create the Vue app instance and mount it on the #app element
createApp(App).use(router).mount('#app');