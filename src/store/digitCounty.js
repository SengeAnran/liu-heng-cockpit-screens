const indicator = {
  sqrk: 1284, // 社区人口数
  sqldlzy: 856, // 社区劳动力资源数
  wwlrzh: 0, // 弱势群体人数
};
export default {
  namespaced: true,
  state: {
    indicator: { ...indicator },
  },
  mutations: {
    changeIndicator(state, param) {
      console.log(param, '222');
      state.indicator.sqrk = param.sqrk;
      state.indicator.sqldlzy = param.sqldlzy;
      state.indicator.wwlrzh = param.wwlrzh;
    },
    resetIndicator(state) {
      state.indicator = { ...indicator };
    },
  },
  actions: {
    achangeIndicator(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => { // 异步操作
          context.commit('changeIndicator', payload);
          resolve(1111);
        }, 1000);
      });
    },
  },
};
