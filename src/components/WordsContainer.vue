<template>
  <section>
    <Loading v-if="loading === true"/>
    <Error v-else-if="error || results.length === 0"/>
    <Word />
  </section>
</template>

<script>
import Loading from './Loading';
import Word from './Word';
import Error from './Error';

export default {
  name: 'WordsContainer',
  components: {
    Loading,
    Word,
    Error
  },
  props: {
    loading: Boolean,
    error: Boolean,
    results: Array,
    word: String
  }
}
</script>

<style scoped>

</style>


