import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import BaseTitle from '@/components/BaseTitle';
import CountUp from '@/components/CountUp';
import ViewTemplate from '@/components/ViewTemplate';
import * as echarts from 'echarts';

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
