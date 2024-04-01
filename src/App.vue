<template>
    <section class="py-10 md:py-16">

      <div class="container max-w-screen-xl mx-auto px-4">

        <nav class="flex items-right justify-between mb-40">
          <!--img src="/images/navbar-logo.png" alt="Logo" @click="toggleColors"-->

          <div class="ml-auto">
            <!-- Move the button inside a div to control its positioning -->
            <button @click="downloadFile" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Download Resume</button>
          </div>
        </nav>

        <div class="text-center">
          <div class="flex justify-center mb-16 ">
              <img :src="header.image" alt="Image" class="h-auto max-w-lg transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0" >
          </div>

          <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
              {{ header.title }}
          </h6>

          <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Software Engineer</h1>

          <p class="font-normal text-gray-600 text-md md:text-xl mb-16">I'm a passionate Full Stack developer.  I love tackling complex problems and turning them into
             beautiful, efficient code. I enjoy creating tools that make life easier for people.</p>

          <router-link to="/contact" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Contact me</router-link>
        </div>

      </div>
    </section>

    <skills-content :page="skills" :skills="skills"></skills-content>
    <project-content :page="pages" :jsProjects="jsProjects" :pythonProjects="pythonProjects"></project-content>
    <footer-content :page="footer"></footer-content>
</template>

<script>
import '../public/css/tailwind.css';
import data from './assets/data.json';
import ContactForm from './components/ContactForm.vue';
import FooterContent from './components/FooterContent.vue';
import ProjectContent from './components/ProjectContent.vue';
import SkillsContent from './components/SkillsContent.vue';

export default {
  components: {
    SkillsContent,
    ProjectContent,
    FooterContent,
    ContactForm
  },
  data() {
    return {
      header: data.header,
      jsProjects: data.jsProjects,
      pythonProjects: data.pythonProjects,
      pages: data.projects,
      skills: data.skills,
      footer: data.footer,
      colorsToggled: false
    }
  },
  methods: {
    toggleColors() {
      this.colorsToggled = !this.colorsToggled;
      const rootElement = document.documentElement;
      if (this.colorsToggled) {
        console.log("add dark-mode");
        rootElement.classList.add('dark-mode');
      } else {
        console.log("remove dark-mode");
        rootElement.classList.remove('dark-mode');
      }
    },
    downloadFile() {
      // Create a link element
      const link = document.createElement('a');
      // Set the href attribute to the path of the file to be downloaded
      link.href = '/css/stylesheet.css';
      // Set the download attribute to specify the file name
      link.setAttribute('download', 'stylesheet.css');
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