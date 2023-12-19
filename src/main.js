import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import mitt from 'mitt'
const emitter = mitt()
loadFonts()

// Create Vue application
const app = createApp(App)
app.use(vuetify)
app.config.globalProperties.emitter = emitter
app.mount('#app')
