<template>
  <section class="py-10 md:py-10">

    <div class="container max-w-screen-xl mx-auto px-4">

        <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">{{ page.pageTitle }}</h1>

        <p class="font-normal text-gray-500 text-xs md:text-base mb-10">{{ page.pageDescription }}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, index) in page.content" :key="index"> 
            <div class="bg-gray-50 px-8 py-10 rounded-md">
              <h4 class="font-medium text-gray-700 text-lg mb-4">{{ item.year }} </h4>

              <p class="font-normal text-gray-500 text-md mb-4">{{ item.program }}</p>

              <div class="relative">
                <h6 class="font-semibold text-gray-500 text-md relative z-10">
                  <a :href="item.school_link" target="_blank">
                    {{ item.school_name }}
                  </a>
                </h6>
                <div v-if="item.id === 0">
                  <span class="w-20 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                </div>
                <div v-else>
                  <span class="w-64 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>  
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
    props:['page']
  }
</script>