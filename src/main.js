import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.errorHandler = (err, vm, info) => {
    console.log('errorHandler', err, vm, info)
}
//createApp(App).mount('#app')
window.app = app;

app.mount('#app')

