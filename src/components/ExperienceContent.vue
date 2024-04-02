<template>
  
    <section class="py-10 md:py-16">

    <div class="container max-w-screen-xl mx-auto px-4">

        <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">{{ page.pageTitle }}</h1>

        <p class="font-normal text-gray-500 text-xs md:text-base mb-20">{{ page.description }}</p>

        <div class="flex flex-col lg:flex-row justify-between">
            <div class="space-y-8 md:space-y-16 mb-16 md:mb-0">
                <h6 class="font-medium text-gray-400 text-base uppercase">{{ page.title_company }}</h6>

                <p class="font-semibold text-gray-600 text-base">{{ page.company }} <span class="font-normal text-gray-300">{{ page.company_span }}</span></p>

                <p class="font-semibold text-gray-600 text-base">{{ page.company }} <span class="font-normal text-gray-300">{{ page.company_span }}</span></p>

                <p class="font-semibold text-gray-600 text-base">{{ page.company }} <span class="font-normal text-gray-300">{{ page.company_span }}</span></p>
            </div>

            <div class="space-y-8 md:space-y-16 mb-16 md:mb-0">
                <h6 class="font-medium text-gray-400 text-base uppercase">{{ page.title_position }}</h6>

                <p class="font-normal text-gray-400 text-base">{{ page.position_1 }}</p>

                <p class="font-normal text-gray-400 text-base">{{ page.position_2 }}</p>

                <p class="font-normal text-gray-400 text-base">{{ page.position_3 }}</p>
            </div>

            <div class="space-y-8 md:space-y-16">
                <h6 class="font-medium text-gray-400 text-base uppercase">{{ page.title_year }}</h6>

                <p class="font-normal text-gray-400 text-base">{{ page.year_1 }}</p>

                <p class="font-normal text-gray-400 text-base">{{ page.year_2 }}</p>

                <p class="font-normal text-gray-400 text-base">{{ page.year_3 }}</p>
            </div>
        </div>
        
    </div>

    </section>
</template>
<script>
  export default {
    props: ['page'],
  }
</script>