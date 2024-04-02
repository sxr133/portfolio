<template>
  <header-content :page="header"></header-content>
  <div class="container mx-auto p-8">
    <form @submit.prevent="sendEmail" class="max-w-md mx-auto">
      <label class="block mb-2">Name</label>
      <input 
        type="text" 
        v-model="name"
        name="name"
        placeholder="Your Name"
        class="w-full px-3 py-2 border rounded-md mb-4"
      >

      <label class="block mb-2">Email</label>
      <input 
        type="email" 
        v-model="email"
        name="email"
        placeholder="Your Email"
        class="w-full px-3 py-2 border rounded-md mb-4"
      >

      <label class="block mb-2">Message</label>
      <textarea 
        name="message"
        v-model="message"
        cols="30" rows="5"
        placeholder="Message"
        class="w-full px-3 py-2 border rounded-md mb-4"
      ></textarea>
      <div class="grid grid-cols-2 gap-4">
        <button type="submit" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Send</button>
        <router-link to="/" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-center text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Return Home</router-link>
      </div>
    </form>
  </div>

  <router-view/>
  <footer-content :page="footer"></footer-content>
</template>

<script>
  import emailjs from 'emailjs-com';
  import HeaderContent from './HeaderContent.vue';
  import FooterContent from './FooterContent.vue';
  import data from '../assets/data.json';

  export default {
    name: 'ContactForm',
    components: {
        HeaderContent,
        FooterContent
    },
    data() {
      return {
        header: data.header,
        footer: data.footer,
        name: this.name,
        email: this.email,
        message: this.message
      }
    },
    methods: {
      sendEmail(e) {
        try {
          emailjs.sendForm('service_kx2ka8f', 'template_6znkpx8', e.target, '3D1dSzQMgXOdmV3U-', {
            name: this.name,
            email: this.email,
            message: this.message
          })

        } catch (err) {
            if (err instanceof ReferenceError) {
              alert( "JSON Error: " + err.message );
            } else {
              throw err; // rethrow
            }
        }
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
      },
    }
  }
</script>