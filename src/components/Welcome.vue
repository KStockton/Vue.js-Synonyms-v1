<template>
  <div class='welcome-container'>
    <header>
      <h1>Welcome</h1>
      <h3>To a fast and easy way to view synonyms</h3>
      <h3>Search a word above to get started!</h3>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}

</script>

<style scoped>
@media (max-width: 400px) {
  .welcome-container {
    max-height: 34rem;  
  }
}

.welcome-container {
  background-image: url('https://cdn.dribbble.com/users/1633085/screenshots/5899673/bookappillustration_4x.jpg');
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: contain;
  flex-direction: column;
  color: black;
  justify-content: center;
  background-color: #eee;
  background-position: center;
  background-size: cover;
}

h1 {
  font-size: 40px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
}
header {
  width: calc(52% - 100px);
  height: 16rem;
  background-color: #ffffffdb;
  min-width: 18rem;
  border: 2px solid;
}

</style>

