<template>
  <section class="py-10 md:py-10">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">{{ page.pageTitle }}</h1>
      <p class="font-normal text-gray-500 text-xs md:text-base mb-10">{{ page.description }}</p>
              
      <h3 class="font-medium text-gray-400 text-3xl md:text-4xl mb-5">{{ page.pageSubTitleJS }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(project, index) in jsProjects" :key="index">
          <div class="bg-gray-50 px-8 py-10 rounded-md">
            <h4 class="font-medium text-gray-700 text-lg mb-4">{{ project.title }}</h4>
            <p class="font-normal text-gray-500 text-md mb-4">{{ project.description }}</p>
            <div class="relative">
              <div class="grid grid-cols-2 gap-x-20">
                <div class="grid grid-rows-auto gap-y-5 justify-items-center items-center">
                  <div>
                    <img :src="project.giticon" title="GIT Repo" alt="GIT Repo" class="w-20 h-20"> 
                  </div>
                  <button class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
                    <a :href='project.repoAddress' target="_blank">Git Repo</a>
                  </button>
                </div>
                <div class="grid grid-rows-auto gap-y-5 justify-items-center items-center">
                  <img :src="project.demoicon" title="GIT Repo" alt="GIT Repo" class="w-20 h-20"> 
                   
                  <button class="px-7 py-3 md:px-9 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
                    <a :href='project.demoAddress' target="_blank">Web Demo</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="font-medium text-gray-400 text-3xl md:text-4xl mb-5 pt-10 md:pt-16">{{ page.pageSubTitlePy }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(project, index) in pythonProjects" :key="index">
          <div class="bg-gray-50 px-8 py-10 rounded-md">
            <h4 class="font-medium text-gray-700 text-lg mb-4">{{ project.title }}</h4>
            <p class="font-normal h-35 text-gray-500 text-md mb-4">{{ project.description }}</p>
            <div class="relative h-40 flex flex-col justify-between"> <!-- Set a fixed height for each project -->
              <div>
                <img :src="project.giticon" title="GIT Repo" alt="GIT Repo" class="w-20 h-20"> 
              </div>
              <div>
                <button class="px-7 py-3 md:px-9 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
                  <a :href="project.repoAddress" target="_blank">Git Repo</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['page', 'jsProjects', 'pythonProjects']
  }
</script>

<style scoped>
  .project-content {
    max-height: calc(100vh - 200px); /* Adjust the height as needed */
    overflow-y: auto; /* Enable vertical scrolling when content exceeds container height */
  }
</style>