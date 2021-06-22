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

export default service;
