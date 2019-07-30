<template>
<div class='loading-bg'>
  <h5>Loading...</h5>
</div>
</template>

<script>
  export default {
    name: 'Loading'
  }

</script>

<style scoped>
  .loading-bg {
    background-image: url('../assets/Spinner.gif');
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position-x: center;
    background-position-y: center;
  }
</style>
