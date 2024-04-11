<template>
    <section class="py-10 md:py-10">
        <div class="container max-w-screen-xl mx-auto px-4">

            <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">{{ page.pageTitle }}</h1>

            <p class="font-normal text-gray-500 text-xs md:text-base mb-5">{{ page.description }}</p>
                
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-slate-600 dark:text-white">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    {{ page.title_company }}
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    {{ page.title_position }}
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    {{ page.title_year }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:bg-slate-300 dark:border-gray-400">
                                <th scope="row" class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                    {{ page.company }}
                                    <span class="font-normal text-black-300">{{ page.company_span }}</span>
                                </th>
                                <td class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                    {{ page.position_1 }}
                                </td>
                                <td class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                    {{ page.year_1 }}
                                </td>

                            </tr>
                            <tr class="border-b bg-slate-300 dark:border-gray-400">
                                <th scope="row" class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                    {{ page.company }}
                                    <span class="font-normal text-black-300">{{ page.company_span }}</span>
                                </th>
                                <td class="px-6 py-4font-medium text-black-900 whitespace-nowrap dark:text-black">
                                    {{ page.position_2 }}
                                </td>
                                <td class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                    {{ page.year_2 }}
                                </td>
                
                            </tr>
                            <tr class="bg-whiteborder-b bg-slate-300 dark:border-gray-400">
                                <th scope="row" class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                    {{ page.company }}
                                    <span class="font-normal text-black-300">{{ page.company_span }}</span>
                                </th>
                                <td class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                    {{ page.position_3 }}
                                </td>
                                <td class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                    {{ page.year_3 }}
                                </td>
                    
                            </tr>
                        </tbody>
                    </table>
                </div>

        </div>
    </section>
</template>
<script>
  export default {
    props: ['page'],
  }
</script>