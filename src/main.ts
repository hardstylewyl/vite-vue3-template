import App from './App.vue'
import './style/index.scss'
import { createApp } from 'vue'
import { setupI18n } from './i18n'
import { setupRouter } from './router'
import { setupPiniaStore } from './store'

const app = createApp(App)
// 配置国际化
setupI18n(app)
// 配置状态存储
setupPiniaStore(app)
// 配置路由
setupRouter(app)

app.mount('#app')
