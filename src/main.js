import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import '@/assets/font.scss';
import BaseTitle from '@/components/BaseTitle';
import CountUp from '@/components/CountUp';

Vue.component('CountUp', CountUp);
Vue.component('BaseTitle', BaseTitle);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
