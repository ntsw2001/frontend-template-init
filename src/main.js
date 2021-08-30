import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'normalize.css/normalize.css';
import './styles/init.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'amfe-flexible';
import 'amfe-flexible/index.js';


Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
