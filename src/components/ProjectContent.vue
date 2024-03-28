<template>
<div v-if="activePage === 3">
  <!-- Show projects if Projects page is active -->
  <h2>{{ page.pageTitle }}</h2>
  <div class="project-section-title">
    <h3>JavaScript Projects</h3>
  </div>
  <div class="project-section">
    <div v-for="(project, index) in jsProjects" :key="index" class="project">
      <h4>{{ project.title }}</h4>
      <p>{{ project.description }}</p>
      <div class="repo-demo">
        <div class="repo-item">
          <div class="icon-image">
            <img :src="project.giticon" title="GIT Repo" alt="GIT Repo"> 
          </div>
          <div class="links">
            <a :href='project.repoAddress' target="_blank">Git Repo</a>
          </div>
        </div>
        <div class="repo-item">
          <div class="icon-image">
            <img :src="project.demoicon" title="Browser Demo" alt="JS Demo" class="demo-icon"> 
          </div>
          <div class="links">
            <a :href='project.demoAddress' target="_blank">Web Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="project-section-title">
    <h3>Python Projects</h3>
  </div>
  <div class="project-section">
    <div v-for="(project, index) in pythonProjects" :key="index" class="project">
      <h4>{{ project.title }}</h4>
      <p>{{ project.description }}</p>
      <div class="repo-demo">
        <div class="repo-item">
          <div class="icon-image">
            <img :src="project.giticon" title="GIT Repo" alt="GIT Repo"> 
          </div>
          <div class="links">
            <a :href='project.repoAddress' target="_blank">Git Repo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['page', 'activePage', 'jsProjects', 'pythonProjects']
}
</script>