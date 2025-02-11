import { createApp } from "vue"
import router from "./router.ts"
import store from "./store.ts"
import App from "./App.vue"
import "./index.css"

createApp(App)
  .use(router)
  .use(store)
  .mount("#app")