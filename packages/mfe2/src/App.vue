<template>
  <div>
    <h1>Micro Frontend 2 (Standalone - Vue2)</h1>
    <app-content></app-content>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
// import AppContent from "./components/AppContent";
export default {
  components: {
    AppContent: defineAsyncComponent(() => import("./components/AppContent")),
  },
  // components: {
  //   AppContent,
  // },
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>