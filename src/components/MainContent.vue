<template>
 
   
    <div v-if="activePage != 2 && activePage != 3">
      <h2>{{ page.pageTitle }}</h2>
      <p>{{ page.content }}</p>
    </div>
  
</template>

<script>
export default {
  props: ['page', 'activePage']
}
</script>