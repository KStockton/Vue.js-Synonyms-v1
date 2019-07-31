<template>
  <div id="app">
    <Header @change="changeWord"/>
    <WordsContainer 
    v-bind:error="error"
    v-bind:loading="loading"
    v-bind:results="results"
    v-bind:word="word"
    v-bind:welcome='welcome'
    @change='changeWord'
    />
  </div>
</template>

<script>
import Header from './components/Header';
import WordsContainer from './components/WordsContainer'
const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'

export default {
  name: 'app',
  components: {
    Header,
    WordsContainer
  },
  data() {
    return {
      word: '',
      results: [],
      error: false,
      loading: false,
      welcome: true
    }
  },
  methods: {
   async changeWord(word) {
     if(word.length === 0) return
     this.word = word
     try {
       this.isLoading = true
        const url = `${BASE_URL}${this.word}?key=${process.env.VUE_APP_MY_ENV_URL}`
        const response = await fetch(url)
        const data = await response.json()
        if(data.length > 0 ){
          this.welcome = false
        }
        this.results = data
        // this.results = data[0].meta.syns[0]
  console.log('results', this.results)
  console.log('data', data)
     }catch(error) {
       console.log(error)
       this.error = true
     }
      this.isLoading = false
    }
  }
}
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
