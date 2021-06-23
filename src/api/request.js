import axios from 'axios';

const baseURL = '/api';

const instance = axios.create({
  baseURL: baseURL,
  timeOur: 5000, // 请求过期时间
});

// instance.interceptors.request.use(
//   (config) => {
//     config.headers.appKey = '3bf591da01e94296978e78a4cda78cd3';
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

instance.interceptors.response.use(
  ({ data }) => {
    // const data = res.data;
    // if (data.code !== 200) {
    //   // console.log(data.message || 'error');
    //   return data;
    // } else {
    //   return data;
    // }
    return data.data || {};
  },
  () => ({}),
);

export default instance;
