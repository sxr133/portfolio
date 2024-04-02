<template>
  <section class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <div class="grid grid-row-2 gap-4">
        <div class="mb-10 lg:mb-0">
          <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">{{ page.pageTitle}}</h1>
          <p class="font-normal text-gray-500 text-xs md:text-base"></p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(skill, index) in skills.content" :key="index">
            <div>
              <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">{{ skill.id }} - {{ skill.title }}</h1>
              <p class="font-normal text-gray-500 text-sm md:text-base">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['page', 'skills']
  }
</script>