<template>
  <div class='word-container'>
    <article  v-bind:key='word' v-for='word in results' class='card-wrapper'>
      <header >
        <h1>{{word.meta.id}}</h1>
        <h3><span>{{word.fl}}</span></h3>
      </header>
      <div class='word-bottom-half'>
      <section v-bind:key="index" v-for="(def, index) in word.def[0].sseq"> 
        <h5>{{ index + 1}}. {{ def[0][1].dt[0][1] }}</h5>
        <h3>Synonyms</h3>
        <section class='syns-wrapper'>
          <button 
            v-for='syns in word.meta.syns[0]' v-bind:key="syns"
            @click="$emit('change', syns)">
            {{syns}}
          </button>
        </section>
      </section>
      </div>
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
@media (max-width: 1200px) {
  .word-container { 
    grid-template-columns: repeat(2, 1fr);
  }
}

header {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background-color: #fdf9f3;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 10px;
  background-color: #14213d;
  color: white;
}
h1 {
  font-size: 24px;
  text-transform: capitalize;
  font-weight:700;
  margin-top: 9px;
  margin-bottom: 1px;
}

h3 {
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
}

span {
  color: gold;
  text-transform: capitalize;
  font-style: italic;
}

h5 {
  text-transform: capitalize;
  text-align: left;
  margin-left: 16px;
  font-size: 18px;
}
.word-container {
  margin: 2rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
}

.card-wrapper {
  background-color: #e8e7e7;
  border-radius: 9px;
  min-width: 22rem;
}

.syns-wrapper {
  text-align: left;
  margin-left: 10px;
  margin-bottom: 9px
}

button {
    cursor: pointer;
    font-size: .9rem;
    background-color: gold;
    font-weight: 500;
    margin: 6px;
    border: none;
    min-height: 30px;
    border-radius: 5px;
}

</style>
