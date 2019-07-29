<template>
  <div id="app">
    <Header/>
    <form v-on:submit.prevent='handleSubmit'>
      <label>
        Enter Word
        <input  v-model='text' name='search' type='text' />
      </label>
        <h4 v-if='error'>Error: {{error}}</h4>
    </form>
  </div>
</template>

<script>

import Header from './components/Header'
const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'

export default {
  name: 'app',
  components: {
    Header,
  },
  data() {
    return {
      text: '',
      results: [],
      error: null
    }
  },
  methods: {
   async handleSubmit() {
      const url = `${BASE_URL}${this.text}?key=${process.env.VUE_APP_MY_ENV_URL}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      data.forEach((result, index) => {

        for(let reqParams of ['meta']){
          if(!result[index][reqParams])
        return this.error = 'Sorry no synonyms with that word 🤷🏾‍'
      }
      })
      this.results = data[0].meta.syns[0]

  console.log(data)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
