<template>
  <nav>
    <img src='../assets/microsoft-word-logo.png' class='logo'/>
  <div  class='input-container'>
    <input 
      placeholder='Enter Word' 
      v-bind:value="word" 
      v-on:keyup.enter="$emit('change', word)"
      v-on:keyup="changeWord"/>
    <i  role='button' class="material-icons search-symbol" 
    v-on:click="$emit('change', word)">
    search
    </i>
  </div>
    <h3>Thesaurus</h3>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      word: ''
    }
  },
    methods: {
      changeWord: function (event) {
        this.word = event.target.value
      }
    },
  mounted() {
    this.$emit('change', this.word)
  }
}
  </script>

<style scoped>
  @media (max-width: 729px) {
    nav {
      grid-template-rows: repeat(2, 50px);
      grid-column: 1;
    }
    img {
      display: none;
      visibility:hidden;
    }
    h3 {
      grid-row: 1;
      grid-column: 2;
      margin: 0px;
    }
    .input-container {
      grid-row: 2;
      grid-column: 2;
    }
  }
  nav {
    background-color: #14213D;
    height: 100px;
    width: 100vw;
    max-width: 100%;
    margin: auto;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    border-bottom: 3px solid #fff;
    color: white;
    min-width: 27rem;
}
  .logo {
    height: 3rem;
    width: 3rem;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 8px;

  }
  .input-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: rgba(249, 245, 245, 0.851);
    width: 100%;
  }
  input {
    height: 36px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-color: #c3e5fe;
    font-size: 20px;
    color: black;
    padding-left: 15px;
    width: 13.3rem;
    background-color: #e8e7e7;
  }
  .search-symbol {
    background-color: #54494B;
    color: #ffffff;
    margin-left: -4px;
    height: 30px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 5px 10px;
    font-size: 26px;
    line-height: 131%;
    cursor: pointer;
    border: none;
  }
  h3 {
    font-size: 1.5rem;
  }
</style>

