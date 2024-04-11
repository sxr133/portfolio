<template>
  <section class="py-10 md:py-16">

    <div class="container max-w-screen-xl mx-auto px-4">

      <nav class="text-center">
        <div class="ml-auto mb-5" v-if="!isContactPage"> <!-- Conditionally show button -->
          <!-- Move the button inside a div to control its positioning -->
          <button @click="downloadFile" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">{{page.download}}</button>
        </div>
      </nav>

      <div class="text-center">
        <div class="flex justify-center mb-5 md:mb-10">
            <img :src="page.image" alt="Image" class="h-auto max-w-sm rounded-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 md:px-10 md:py-10 md:pt-10 md:pb-10" >
        </div>

        <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            {{ page.title }}
        </h6>

        <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">{{page.position}}</h1>

        <p class="font-normal text-gray-600 text-md md:text-xl mb-16">{{ page.description }}</p>

        <router-link  v-if="!isContactPage" to="/contact" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">{{ page.contact_me }}</router-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['page'],
    computed: {
      isContactPage() {
        // Access meta field of the current route
        return this.$route.meta.isContactPage; 
      }
    },
    methods: {
      downloadFile() {
        // Create a link element
        const link = document.createElement('a');
        // Set the href attribute to the path of the file to be downloaded
        link.href = '/data/Steve_Rousseau_Resume.docx';
        // Set the download attribute to specify the file name
        link.setAttribute('download', 'Steve_Rousseau_Resume.docx');
        // Append the link to the document body
        document.body.appendChild(link);
        // Programmatically click the link to trigger the download
        link.click();
        // Remove the link from the document
        document.body.removeChild(link);
      }
    }
  }
</script>