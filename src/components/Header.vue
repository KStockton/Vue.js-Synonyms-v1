<template>
  <nav>
    <img src='../assets/microsoft-word-logo.png' class='logo'/>
    <div  class='input-container'>
      <input 
        placeholder='Enter Word' 
        v-bind:value="word" 
        v-on:keyup.enter="$emit('change', word)"
        v-on:keyup="changeWord"/>
        <button 
        type='submit' 
        name='submit' 
        id='submit-word'
        v-on:click="$emit('change', word)"
        >
      <i  role='button' class="material-icons search-symbol">
      search
      </i>
      </button>
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
    };
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
  @media only screen
  and (max-width: 320px)
  and (max-width: 420px)
  and (max-width: 650px) {
    input {
       -webkit-border-radius: 0;
       -moz-border-radius: 0;
       border-radius: 0;
     }
  }

  @media (max-width: 729px) {
    nav {
      grid-template-rows: repeat(2, 50px);
      grid-column: 1;
      min-height: 120px;
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
    border-bottom: 1px solid #ffd700;
    color: #ffffff;
    position: sticky;
    top: 1px;
}

  .logo {
    height: 3rem;
    width: 3rem;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 8px;
  }
  .input-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: rgba(249, 245, 245, 0.851);
    width: 224px;
    height: 35px;
    position: relative;
  }

  input {
    height: 100%;
    border: none;
    font-size: 18px;
    color: rgb(117, 117, 117);
    padding: 0px 41px 0px 9px;
    width: 11.3rem;
    background-color: #e8e7e7;
  }
  
  .search-symbol {
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    color: rgb(117, 117, 117);
    font-size: 19px;
  }

  #submit-word {
    border:none;
    height: 100%;
    background-color: white;
    position: absolute;
    right: -6px;
  }

  h3 {
    font-size: 1.5rem;
  }
  
</style>

