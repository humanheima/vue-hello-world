import { createApp } from 'vue'
import App from './App.vue'
import { initRemAdaptation } from './config/rem-config.js'

// 初始化 REM 适配
initRemAdaptation()

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
    console.log('errorHandler', err, vm, info)
}


//createApp(App).mount('#app')
window.app = app;

app.mount('#app')



