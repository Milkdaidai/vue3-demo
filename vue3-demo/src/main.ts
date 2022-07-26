import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { loadAllPlugins } from './plugins';
// import '@/styles/index.scss';
import '@/assets/iconfont/iconfont.css';
// import 'normalize.css';

const app = createApp(App);
// 加载所有插件
loadAllPlugins(app);
app.use(store).use(router).mount('#app');


