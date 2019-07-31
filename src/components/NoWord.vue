<template>
<section>

  <h1>Sorry <span aria-label="Emoji: shrug">🤷🏾‍♂</span> 
    no results found with "{{word}}" <span ria-label="Emoji: head-exploding"> 🤯</span>
  </h1>
  <h1>Try a word below</h1>
  <ul>
    <li v-for='result in results' v-bind:key='result'>
      <button @click="$emit('change', result)">{{result}}</button>
    </li>
  </ul>

</section>
</template>

<script>

export default {
  name: 'NoWord',
  props: {
    results: Array,
    word: String
  }
}
</script>




<style scoped>
  h1 {
    font-size: 24px;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    list-style-type: none;
    margin: 10px;
  }

  button {
    font-size: 2rem;
    cursor: pointer;
    background-color: gold;
    border-radius: 5px;
    border: none;
  }
</style>


