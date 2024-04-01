import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '../public/css/tailwind.css';
import App from './App.vue';
import ContactForm from './components/ContactForm.vue';


// Create the router instance and define routes
const routes = [
  { path: '/', 
    component: App 
  },
  { 
    path: '/contact', 
    component: ContactForm 
  } // Render the ContactForm within ContactLayout
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Create the Vue app instance and mount it on the #app element
createApp(App).use(router).mount('#app');
