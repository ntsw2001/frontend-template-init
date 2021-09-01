import axios from 'axios';
import auth from './auth';
import router from '../router/index'

// baseURL：后端IP
const BASE_URL = 'http://127.0.0.1:8000/';

class Http {
  constructor() {
    this.http = axios.create({
      baseURL: BASE_URL,
      timeout: 1000
    });
    
    // 请求拦截
    this.http.interceptors.request.use(config => {
      const token = auth.token;
      if (token) {
        config.headers.common.Authorization = 'JWT ' + token;
      }
      return config;
    });

    // 响应后拦截
    this.http.interceptors.response.use(response => {
      if (response.status == 403) {
        auth.rmAll();
         router.replace('/');
      }
      return response;
    })
  }
  
  // 登录请求
  login(params) {
    const url = 'login/';
    return this.http.post(url, params);
  }


}

export default new Http();