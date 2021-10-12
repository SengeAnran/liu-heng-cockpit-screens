import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    intervalId: 0, // 定时器 id
    interval: 0,
    navShow: true,
  },
  mutations: {
    setIntervalId(state, msg) {
      if (msg) {
        state.intervalId = setInterval(() => {
          state.interval++;
        }, 1000);
      } else {
        state.interval = 0;
        clearInterval(state.intervalId);
      }
    },
  },
  actions: {},
  modules: {},
});
