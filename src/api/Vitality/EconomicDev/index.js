import axios from '@/api/request';

export default {
  // 劳动人口年龄分布
  ageDistribution() {
    return axios.get('/energy/getAgeDistribution');
  },
  // 三类产业占比
  distributionByYear() {
    return axios.get('/energy/getAgeDistributionByYear');
  },
  // 人均GDP趋势
  gdp() {
    return axios.get('/energy/getGdp');
  },
  // 财政收入情况
  financialRevenue() {
    return axios.get('/energy/getFinancialRevenue');
  },
  // 人口经济情况
  economicInfo() {
    return axios.get('/energy/getEconomicInfo');
  },
  // 人口宏观情况
  populationInfo() {
    return axios.get('/energy/getPopulationInfo');
  },
};
