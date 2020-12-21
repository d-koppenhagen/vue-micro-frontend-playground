<template>
  <h1>Micro Frontend 1</h1>
  <div class="app-shell-container"></div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-shell-container {
  width: 100%;
  height: 60vh;
  border: 3px dashed #2c3e50;
}
</style>
