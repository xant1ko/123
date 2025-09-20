import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify"
import vueDevTools from "vite-plugin-vue-devtools"

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    return {
        plugins: [
            
            vueDevTools(),
            vue(),
            vuetify()
        ],
    }
})

