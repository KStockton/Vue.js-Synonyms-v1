<template>
  <nav>
    <img src='../assets/microsoft-word-logo.png' class='logo'/>
  <form v-on:keyup.enter='wordUpdate'>
    <input placeholder='Enter Word' v-bind="word" v-on:keyup="wordUpdate"/>
      <i class="material-icons search-symbol">
      search
      </i>
  </form>
  <h3>Thesaurus</h3>
  </nav>
</template>






<script>


export default {
  name: 'Header',
  data() {
    return {
      word: '',

    }
  },
  methods: {
    wordUpdate (event) {
      this.word = event.target.value
    }
  }
  
}
  </script>

<style scoped>
  nav {
    background-color: #fdf9f3;
    height: 100px;
    width: 100vw;
    max-width: 100%;
    margin: auto;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
        border-bottom: 2px solid #e8e7e7
}
  .logo {
    height: 75px;
    width: 75px;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: rgba(249, 245, 245, 0.851);
    width: 100%;
    margin-top: 20px;
  }
  input {
    height: 3rem;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-style: none;
    border-color: #c3e5fe;
    font-size: 20px;
    color: grey;
    padding-left: 15px;
    width: 17.3rem;
    background-color: #e8e7e7;
  }
  .search-symbol {
    background-color: #54494B;
    color: #ffffff;
    margin-left: -4px;
    height: 2.5rem;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 5px 10px;
    font-size: 41px;
    line-height: 100%;
    cursor: pointer;
    border: none;
  }
</style>

