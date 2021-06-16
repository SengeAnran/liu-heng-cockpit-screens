import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// import echarts from 'echarts';
import * as echarts from 'echarts';
import '@/assets/font.scss';
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
