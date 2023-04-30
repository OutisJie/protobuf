import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MyComponent from "@protobuf/form"

const app = createApp(App)
app.use(MyComponent);

app.mount('#app')