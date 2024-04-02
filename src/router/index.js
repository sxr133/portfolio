import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import ContactForm from '@/components/ContactForm.vue';
import Home from '@/components/Home.vue';


// Create the router instance and define routes
const routes = [
  { path: '/', 
    component: Home 
  },
  { 
    path: '/contact', 
    component: ContactForm,
    meta: 
    { 
      isContactPage: true 
    } 
  } // Render the ContactForm within ContactLayout
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;