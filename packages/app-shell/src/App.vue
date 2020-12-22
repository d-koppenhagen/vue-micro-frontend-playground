<template>
  <div class="container app-shell">
    <h1>Hosting App (App Shell - Vue3)</h1>
    <div class="container remote-component">
      <h2>remote-component (micro frontend)</h2>
      <micro-frontend-1></micro-frontend-1>
    </div>

    <div class="container remote-component">
      <h2>remote-component (micro frontend)</h2>
      <micro-frontend-2></micro-frontend-2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1, h2 {
  font-family: Arial, Helvetica, sans-serif;
}
.container {
 padding: 10px;
}
.app-shell {
  border: 1px solid rgb(61, 136, 61);
}
.remote-component {
  border: 1px solid rgb(91, 91, 175);
}
</style>