<template>
  <header-content :page="header"></header-content>
  <skills-content :page="skills" :skills="skills"></skills-content>
  <project-content :page="pages" :jsProjects="jsProjects" :pythonProjects="pythonProjects"></project-content>
  <experience-content></experience-content>
  <footer-content :page="footer"></footer-content>
</template>

<script>
import data from '../assets/data.json';
import ContactForm from './ContactForm.vue';
import ExperienceContent from './ExperienceContent.vue';
import FooterContent from './FooterContent.vue';
import HeaderContent from './HeaderContent.vue';
import ProjectContent from './ProjectContent.vue';
import SkillsContent from './SkillsContent.vue';
import '/public/css/tailwind.css';

export default {
  components: {
    HeaderContent,
    SkillsContent,
    ProjectContent,
    ExperienceContent,
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
    }
  }
}
</script>