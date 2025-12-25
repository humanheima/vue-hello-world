import { createApp } from 'vue'
import App from './App.vue'
import { initRemAdaptation } from './config/rem-config.js'
import store from './store/index.js'
import 'windi.css'

// 初始化 REM 适配
initRemAdaptation()

const app = createApp(App)

// 使用 Vuex store
app.use(store)

app.config.errorHandler = (err, vm, info) => {
    console.log('errorHandler', err, vm, info)
}


//createApp(App).mount('#app')
window.app = app;

app.mount('#app')



