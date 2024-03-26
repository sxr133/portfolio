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
    </div>
  </div>
  <div class="project-section-title">
    <h3 class="project-section">Python Projects</h3>
  </div>
  <div class="project-section">
    <div v-for="(project, index) in pythonProjects" :key="index" class="project">
      <h4>{{ project.title }}</h4>
      <p>{{ project.description }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['page', 'activePage', 'jsProjects', 'pythonProjects']
}
</script>