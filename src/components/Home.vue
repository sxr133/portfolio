<template>
  <header-content :page="header"></header-content>
  <experience-content :page="experience"></experience-content>
  <skills-content :page="skills" :skills="skills"></skills-content>
  <project-content :page="pages" :jsProjects="jsProjects" :pythonProjects="pythonProjects" :finalProject="finalProject"></project-content>
  <education-content :page="education"></education-content>
  <footer-content :page="footer"></footer-content>
</template>

<script>
import data from '../assets/data.json';
import ContactForm from './ContactForm.vue';
import EducationContent from './EducationContent.vue';
import ExperienceContent from './ExperienceContent.vue';
import FooterContent from './FooterContent.vue';
import HeaderContent from './HeaderContent.vue';
import ProjectContent from './ProjectContent.vue';
import SkillsContent from './SkillsContent.vue';
import '/public/css/tailwind.css';

export default {
  name:'App',
  mounted(){
    this.setFavicon();
  },
  components: {
    HeaderContent,
    SkillsContent,
    ProjectContent,
    ExperienceContent,
    EducationContent,
    FooterContent,
    ContactForm
  },
  data() {
    return {
      header: data.header,
      jsProjects: data.jsProjects,
      pythonProjects: data.pythonProjects,
      finalProject: data.finalProject,
      pages: data.projects,
      skills: data.skills,
      experience: data.experience,
      education: data.education,
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
    setFavicon() {
      // Find the existing favicon link element
      const favicon = document.querySelector('link[rel="icon"]');

      // Create a new link element for the favicon with your logo
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/png'; // Change the type if your logo is not in PNG format
      newFavicon.href = './images/logo-white.svg'; // Adjust the path to your logo file

      // Replace the existing favicon with the new one
      if (favicon) {
        document.head.removeChild(favicon);
      }
      document.head.appendChild(newFavicon);
    }
  }
}
</script>