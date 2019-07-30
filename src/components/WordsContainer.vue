<template>
  <section>
    <Loading v-if="isLoading === true"/>
    <Error v-else-if="error || allWords.length === 0"/>
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
    isLoading: Boolean,
    error: Boolean,
    allResults: Array,
    word: String
  }
}
</script>

<style scoped>

</style>


