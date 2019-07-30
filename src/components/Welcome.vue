<template>
  <div class='welcome-container'>
    <h1>Welcome</h1>
    <p>Choose a Word</p>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}

</script>

<style scoped>
.welcome-container {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: contain;
  flex-direction: column;
  color: black;
  justify-content: center;
}

h1 {
  font-size: 40px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
}

</style>

