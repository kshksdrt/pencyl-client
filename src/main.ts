import { createApp } from 'vue'
import "tailwindcss/tailwind.css"

import router from '@/config/router'
import '@/config/registerServiceWorker'

import initialize from '@/core/initialize'

import App from '@/App.vue'

initialize()

const app = createApp(App)

app.use(router).mount('#app')
