<template>
  <div id="app">
    <form v-on:submit.prevent='handleSubmit'>
      <label>
        Enter Word
        <input  v-model='text' name='search' type='text' />

      </label>
    </form>
  </div>
</template>

<script>

// for(let requiredParameter of ['id']){
//     if(!idInfo[requiredParameter])// checks to makesure all the required parameters are in the request body
//       return response
const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'


export default {
  name: 'app',
  data: function () {
    return {
      text: '',
      results: [],
      error: ''
    }
  },
  methods: {
   async handleSubmit() {
      const url = `${BASE_URL}${this.text}?key=${process.env.VUE_APP_MY_ENV_URL}`
      const response = await fetch(url)
      const data = await response.json()
      
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
  margin-top: 60px;
}
</style>
