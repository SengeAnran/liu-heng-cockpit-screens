import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import BaseTitle from '@/components/BaseTitle';
import CountUp from '@/components/CountUp';
import Digital from '@/components/Digital';
import ViewTemplate from '@/components/ViewTemplate';
import * as echarts from 'echarts';

// eslint-disable-next-line quotes
import "./font.css";

// import { getSignature } from '@/api/AuthController/api';

// async function getData() {
//   const data = {
//     serviceId: 'f16bb5eeecb144e38d5469189224bf0a',
//     subServiceId: 'db6d1f6b59c04adcab65bc00106e0a84',
//     accessToken: '0984be14faa54fe1b2a8055b2569633d',
//     requestData: {
//       size: 100,
//       includeColumns: true,
//       params: [],
//     },
//   };
//   const res = await getSignature(data).request();
//   window.localStorage.autograph = res;
// }
// getData();

Vue.component('Digital', Digital);
Vue.component('CountUp', CountUp);
Vue.component('BaseTitle', BaseTitle);
Vue.component('view-template', ViewTemplate);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
