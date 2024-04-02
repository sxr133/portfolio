<template>
  <footer class="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">

    <div class="container max-w-screen-xl mx-auto px-4">
      <div class="text-center">
        <div class="flex items-center justify-center space-x-8">
          <a href="https://github.com/sxr133" target="_blank" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <i data-feather="github" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500">{{page.github}}</i>
          </a>

          <a href="https://www.linkedin.com/in/steve-rousseau-b282589b" target="_blank" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <i data-feather="linkedin" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500">{{page.linkedIn}}</i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['page']
}
feather.replace()
</script>