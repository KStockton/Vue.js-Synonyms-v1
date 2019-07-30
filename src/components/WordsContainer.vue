<template>
  <section>
    <Loading v-if="loading === true"/>
    <Welcome v-else-if='welcome'/>
    <Error v-else-if="error || results.length === 0"/>
    <Word v-else v-bind:results='results'/>
  </section>
</template>

<script>
import Loading from './Loading';
import Word from './Word';
import Error from './Error';
import Welcome from './Welcome';

export default {
  name: 'WordsContainer',
  components: {
    Loading,
    Word,
    Error,
    Welcome
  },
  props: {
    loading: Boolean,
    error: Boolean,
    results: Array,
    word: String,
    welcome: Boolean
  }
}
</script>

<style scoped>

</style>


