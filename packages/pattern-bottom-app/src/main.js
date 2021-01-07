import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import patternUI from 'pattern-ui'

createApp(App).use(store).use(router).use(patternUI).mount('#app')
