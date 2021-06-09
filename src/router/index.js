import Vue from 'vue';
import VueRouter from 'vue-router';
import routeConfig from '@/config/routes';

Vue.use(VueRouter);

const routes = [
  ...routeConfig,
  {
    path: '/',
    redirect: '/overview',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
