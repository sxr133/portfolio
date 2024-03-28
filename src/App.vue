<template>
  <div id="content">
    <navbar :pages="pages" :active-page="activePage" :nav-Link-click="(index) => activePage = index"></navbar>
    <div class="header">
      <h1>{{ header.title }}</h1>
      <img :src="header.image" alt="Profile Picture" class="profile-image">
    </div>
    <main-content :page="pages[activePage]" :activePage="activePage"></main-content>
    <skills-content :page="pages[activePage]" :activePage="activePage" :skills="skills"></skills-content>
    <project-content :page="pages[activePage]" :activePage="activePage" :jsProjects="jsProjects" :pythonProjects="pythonProjects"></project-content>
  </div>
  <div class="footer">
      <img :src="footer.giticon" title="GIT Repo" alt="GIT Repo"> 
      <img :src="footer.linkedInicon" title="LinkedIn Profile" alt="LinkedIn Profile"> 
    </div>

</template>

<script>
import MainContent from './components/MainContent.vue';
import Navbar from './components/Navbar.vue';
import ProjectContent from './components/ProjectContent.vue';
import SkillsContent from './components/SkillsContent.vue';
import data from './assets/data.json';

export default {
  components: {
    Navbar,
    MainContent,
    SkillsContent,
    ProjectContent
  },
  data() {
    return {
      activePage: 0,
      header: data.header,
      jsProjects: data.jsProjects,
      pythonProjects: data.pythonProjects,
      pages: data.pages,
      skills: data.skills,
      footer: data.footer
    }
  }
}
</script>