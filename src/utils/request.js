import axios from 'axios';

const service = axios.create({
  baseURL: '/api',
  timeout: 1000,
});

const err = (error) => {
  Promise.reject(error);
};

service.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  err,
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  }, err,
);
const baseUrl = 'http://10.25.17.237:18156/wydaas/public/rs/dataService';

export const request = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
});
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // config.headers['Content-Type'] = 'application/json';
    if (config.method === 'post') {
      const data = config.data;
      config.data = JSON.stringify({
        auth: {
          serviceId: 'f16bb5eeecb144e38d5469189224bf0a', // 数据开放服务Id
          subServiceId: 'db6d1f6b59c04adcab65bc00106e0a84', // 数据开放订阅服务Id
          // signature: localStorage.autograph, // 请求参数签名
          signatureVersion: '2.0', // 当前使用的签名版本
          timestamp: new Date().getTime(), // 请求的时间戳
        }, // 认证参数
        size: '100',
        includeColumns: 'true',
        ...data,
      });
    }
    return config;
  },
  err,
);
// 回复拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  }, err,
);

export default service;
