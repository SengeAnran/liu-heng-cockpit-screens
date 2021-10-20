import Vue from 'vue';
import Vuex from 'vuex';
import digitCounty from './digitCounty';

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
  getters: {
    indicator: (state) => state.digitCounty.indicator,
  },
  actions: {},
  modules: {
    digitCounty,
  },
});
