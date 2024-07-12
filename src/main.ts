import App from './App.vue'
import './style/index.scss'
import { createApp } from 'vue'
import { setupPiniaStore } from './store'
import { setupRouter } from './router'
import { setupI18n } from './i18n'



const app = createApp(App)
//配置国际化
setupI18n(app)
//配置状态存储
setupPiniaStore(app)
//配置路由
setupRouter(app)



app.mount('#app')
