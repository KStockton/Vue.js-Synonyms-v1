<template>
<section>

  <h1>Sorry <span aria-label="Emoji: shrug">🤷🏾‍♂</span> 
    No results found<span ria-label="Emoji: head-exploding"> 🤯</span></h1>
  <h1>Try the words below</h1>
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


