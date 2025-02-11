import { createApp } from "vue"
import router from "./router.ts"
import App from "./App.vue"
import "./index.css"

createApp(App)
  .use(router)
  .mount("#app")