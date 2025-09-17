import { createApp } from 'vue'
import '/src/assets/styles.css'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import router from './router'


const vuetify = createVuetify({})
createApp(App).use(router).use(vuetify).mount('#app')