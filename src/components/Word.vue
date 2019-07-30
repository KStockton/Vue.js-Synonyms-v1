<template>
  <div class='word-container'>
    <article v-for='word in results' class='card-wrapper'>
      <header>
        <h1>{{word.meta.id}}</h1>
        <h3>{{word.fl}}</h3>
      </header>
      <section v-bind:key="index" v-for="(def, index) in word.def[0].sseq"> 
        <h5>{{ index + 1}}. {{ def[0][1].dt[0][1] }}</h5>
        <h3>Synonyms</h3>
        <button 
          v-for='syns in word.meta.syns[0]' v-bind:key="syns"
          v-on:click="$emit('change', syns)">
          {{syns}}
        </button>
      </section>
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
  margin: 2rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-flow: row;
}
.card-wrapper {
  background-color: #e8e7e7;
}
</style>
