import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";

const mfe1App = defineAsyncComponent(() => import("mfe1/AppContent"));
const mfe2App = defineAsyncComponent(() => import("mfe2/AppContent"));
const reactMfeApp = defineAsyncComponent(() => import("reactmf/AppContent"));

const app = createApp(App);

app.component("micro-frontend-1", mfe1App);
app.component("micro-frontend-2", mfe2App);
app.component("micro-frontend-3", reactMfeApp);

console.log('DBG', { mfe1App, mfe2App, reactMfeApp, app });

app.mount("#app");