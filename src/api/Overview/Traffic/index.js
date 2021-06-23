import axios from '@/api/request';

export default {
  // 公交营运分析
  busAnalysis() {
    return axios.get('/traffic/getBusAnalysis');
  },
  // 全镇交通情况
  trafficeInfo() {
    return axios.get('/traffic/getTrafficeInfo');
  },
  // 全镇客源量
  sourceTrend() {
    return axios.get('/traffic/getSourceTrend');
  },
  // 客运量分布情况
  passengerTrend() {
    return axios.get('/traffic/getPassengerTrend');
  },
  // 出租车运营分析
  taxiAnalysis() {
    return axios.get('/traffic/getTaxiAnalysis');
  },
  // 非法运营载客信息
  illegalInfo() {
    return axios.get('/traffic/getIllegalInfo');
  },
};
