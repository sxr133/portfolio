<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Portfolio</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(page, index) in pages" :key="index" class="nav-item">
          <a class="nav-link" :href="page.link.url" :title="`This link goes to the ${page.link.text} page`" @click.prevent="navLinkClick(index)">{{ page.link.text }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['pages', 'activePage', 'navLinkClick']
}
</script>