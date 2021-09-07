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
const baseUrl = '/guoyan';

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
      // config.data = JSON.stringify({
      //   auth: {
      //     serviceId: '4e8820bbf0f34e60b609259b982ae76b', // 数据开放服务Id
      //     subServiceId: '9e5d711193874ff2b3204f5e8303cfa6', // 数据开放订阅服务Id
      //     // signature: localStorage.autograph, // 请求参数签名
      //     signatureVersion: '2.0', // 当前使用的签名版本
      //     timestamp: new Date().getTime(), // 请求的时间戳
      //   }, // 认证参数
      //   size: 100,
      //   includeColumns: true,
      //   ...data,
      // });
      config.data = {
        ...data,
      };
    }
    return config;
  },
  err,
);
// 回复拦截器
request.interceptors.response.use(
  (response) => {
    return response.data.data;
  }, err,
);

export default service;
