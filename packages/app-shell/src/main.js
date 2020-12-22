import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";

const mfe1App = defineAsyncComponent(() => import("mfe1/AppContent"));

const app = createApp(App);

app.component("micro-frontend-1", mfe1App);

app.mount("#app");