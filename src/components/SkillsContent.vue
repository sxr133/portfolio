<template>
    <div v-if="activePage === 2">
      <h2>{{ page.pageTitle }}</h2>
      <!-- Show skills only if Skills page is active -->
      <div class="skills-section">
        <div v-for="(skill, index) in skills" :key="index" class="skill">
          <h3>{{ skill.title }}</h3>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  props: ['page', 'activePage', 'skills']
}
</script>