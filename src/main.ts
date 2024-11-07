import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import './assets/index.css'
import router from './router';
import './mock/mock';

const app = createApp(App);
app.use(router);
app.mount('#app');
