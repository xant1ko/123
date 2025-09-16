import { createApp } from 'vue'
import '/src/assets/styles.css'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'


const vuetify = createVuetify({})
createApp(App).use(vuetify).mount('#app')