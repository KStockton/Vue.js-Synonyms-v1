<template>
  <div id="app">
    <Top @change="changeWord"/>
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
import Top from './components/Top';
import WordsContainer from './components/WordsContainer'
const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
export default {
  name: 'app',
  components: {
    Top,
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

     if(word.length === 0) return null;
     this.word = word
     try {
       this.loading = true
        const url = `${BASE_URL}${this.word}?key=${process.env.VUE_APP_API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        if(data.length > 0 ){
          this.welcome = false
        }
        this.results = data	

     }catch(error) {
       console.log(error)
       this.error = true
     }
      this.loading = false
    }
  }
}
</script>

<style>

html { 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
}
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
