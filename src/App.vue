<template>
  <div id="app">
    <Header @change="changeWord"/>
    <WordsContainer 
    v-bind:error="error"
    v-bind:isLoading='isLoading'
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
      error: null,
      isLoading: false
    }
  },
  methods: {
   async changeWord(word) {
     this.word = word
     try {
       this.isLoading = true
        const url = `${BASE_URL}${this.word}?key=${process.env.VUE_APP_MY_ENV_URL}`
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

     }catch(error) {
       this.error = error.message
     }
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
