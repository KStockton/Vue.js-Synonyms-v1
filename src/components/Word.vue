<template>
  <div class='word-container'>
    <h1>words</h1>
    <article v-for='word in results'>
      <header>
        <h1>{{word.meta.id}}</h1>
      </header>
    </article>
  </div>
</template>
<script>
  export default {
    name: 'Word',
    props: {
      results: Array
    }
  }

</script>

<style scoped>
  .word-container {
    display: grid;
    grid-auto-rows: 100px;
  }
</style>
