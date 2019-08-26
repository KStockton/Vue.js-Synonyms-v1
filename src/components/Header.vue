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
    nav i {
      height: 36px;
    }

    .search-symbol {
      -webkit-border-radius: 0px;
      border-radius: 0;
      height: 2.8rem;
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
    width: 100%;
  }

  input {
    height: 2rem;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    -webkit-border-top-left-radius: 5px;
    -webkit-border-bottom-left-radius: 8px;
    border-color: #c3e5fe;
    font-size: 20px;
    color: rgb(0, 0, 0);
    padding-left: 15px;
    width: 10.3rem;
    background-color: #e8e7e7;
  }

  .search-symbol {
    background-color: #54494b;
    color: #fff;
    height: 2.5rem;
    border-top-right-radius: 8px;
    -webkit-border-top-right-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0px 4px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 1.5rem;
  }
  
</style>

