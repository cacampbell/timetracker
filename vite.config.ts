import { defineConfig } from "vite"
import vuePlugin from "@vitejs/plugin-vue"
import tailwindPlugin from "@tailwindcss/vite"

export default defineConfig({
    plugins: [
        vuePlugin(),
        tailwindPlugin()
    ]
})