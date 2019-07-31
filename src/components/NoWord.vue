<template>
<section>

  <h1>Sorry 🤯 No results found</h1>
  <ul>
    <li v-for='result in results' v-bind:key='result'>
      <button>{{result}}</button>
    </li>
  </ul>

</section>
</template>

<script>

export default {
  name: 'NoWord',
  props: {
    results: Array
  }
}
</script>




<style scoped>

</style>


