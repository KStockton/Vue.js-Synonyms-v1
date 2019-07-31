<template>
  <section>
    <Loading v-if="loading === true"/>
    <Welcome v-else-if='welcome' />
    <Error v-else-if="error || results.length === 0"/>
    <NoWord v-else-if="!results[0].meta" v-bind:results='results' v-on='$listeners'/>
    <Word v-else v-bind:results='results' v-on='$listeners'/>
  </section>
</template>

<script>
import Loading from './Loading';
import Word from './Word';
import Error from './Error';
import Welcome from './Welcome';
import NoWord from './NoWord';

export default {
  name: 'WordsContainer',
  components: {
    Loading,
    Word,
    Error,
    Welcome,
    NoWord
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



