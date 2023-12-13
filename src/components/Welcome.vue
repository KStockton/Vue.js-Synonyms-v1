<template>
  <div class="welcome-container">
    <header>
      <h1>Welcome</h1>
      <p>
        "I bought a thesaurus, but when I got home and opened it, all the pages
        were blank. I have no words to describe how angry I am." - Rodney Dangerfield
      </p>
    </header>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
@media (max-width: 400px) {
  .welcome-container {
    max-height: 34rem;
  }
}

.welcome-container {
  background-image: url("https://cdn.dribbble.com/users/1633085/screenshots/5899673/bookappillustration_4x.jpg");
  display: flex;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 101px);
  background-size: contain;
  flex-direction: column;
  color: black;
  justify-content: center;
  background-color: #eee;
  background-position: center;
  background-size: cover;
}

h1 {
  font-size: 2.7rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}

.welcome-container p {
  font-size: 1.2rem
}

header {
  width: calc(52% - 100px);
  height: 16rem;
  background-color: #ffffffdb;
  min-width: 18rem;
  padding: 1rem;
}
</style>
