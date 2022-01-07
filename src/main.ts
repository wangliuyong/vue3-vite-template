import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
// 引入
import { createPinia } from "pinia";
//创建根存储库并将其传递给应用程序
app.use(createPinia());

app.use(router);

app.mount("#app");
