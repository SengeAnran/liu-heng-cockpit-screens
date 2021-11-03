import Vue from 'vue';
import VueRouter from 'vue-router';
import routeConfig from '@/config/routes';
import { parse } from '@/utils/qs';

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

const session = 'lhzhzz';

function initSession() {
  const querySession = parse().session;
  console.log(querySession);
  if (querySession === session) {
    sessionStorage.setItem('querySession', session);
  }
}
initSession();
// router.beforeEach((to, from, next) => {
//   if (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || sessionStorage.getItem('querySession') === session) {
//     return next();
//   }
//   location.href = 'http://60.163.192.206:8000/oa/oauth/authorize?client_id=bigscreen&response_type=code&redirect_uri=http://60.163.192.206:8000/h5app_liuheng/views/liuheng/views/index.html';
// });

export default router;
