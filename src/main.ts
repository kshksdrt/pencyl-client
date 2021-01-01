import { createApp } from 'vue'
import "tailwindcss/tailwind.css"

import router from '@/router'
import '@/registerServiceWorker'

import globals from '@/components/BaseComponents/globalComponents.ts'
import initialize from './utilities/initialize'

import App from '@/App.vue'

initialize()

const app = createApp(App)

app.use(router).mount('#app')

for (const each in globals) {
  app.component(each, globals[each])
}
