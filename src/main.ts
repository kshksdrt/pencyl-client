import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import globals from '@/components/BaseComponents/globalComponents.ts'

const app = createApp(App)

app.use(router).mount('#app')

for (const each in globals) {
  app.component(each, globals[each])
}
