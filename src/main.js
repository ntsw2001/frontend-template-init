import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/init.css';

// 自定义封装后的库
import auth from '@/utils/auth';
import http from '@/utils/http';
import crypt from '@/utils/crypt';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$auth = auth;
Vue.prototype.$http = http;
Vue.prototype.$crypt = crypt;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
