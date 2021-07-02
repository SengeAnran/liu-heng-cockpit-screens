import axios from '@/api/request';

export default {
  // 劳动人口年龄分布
  ageDistribution() {
    return axios.get('/energy/getAgeDistribution');
  },
  // 三类产业占比
  threeTypeIndustries(year) {
    return axios.get('/energy/getThreeTypeIndustries', {
      params: { year },
    });
  },
  // 三类产业占比
  threeTypeIndustriesYears() {
    return axios.get('/energy/getYears');
  },
  // 人均GDP趋势
  gdp() {
    return axios.get('/energy/getGDPTrend');
  },
  // 财政收入情况
  financialRevenue() {
    return axios.get('/energy/getFinancialRevenue');
  },
  // 人口经济情况
  economicInfo() {
    return axios.get('/energy/getPopulationAndEconomic');
  },
  // 人口宏观情况
  populationInfo() {
    return axios.get('/energy/getPopulationInfo');
  },
  // 工业生产总值与工业企业数
  industrialAndEnterprises() {
    return axios.get('/energy/getIndustrialAndEnterprises');
  },
  // 外贸总额和增长率
  foreignTradeAndGrowthRates() {
    return axios.get('/energy/getForeignTradeAndGrowthRates');
  },
  // 旅游接待人数和旅游收入
  tourismReceptionIncome() {
    return axios.get('/energy/getTourismReceptionIncome');
  },
  // 渔农村常住居民人均可支配收入
  perCapitaDisposableIncome() {
    return axios.get('/energy/getPerCapitaDisposableIncome');
  },
  // 渔农业总产值
  fishAndAgricultural() {
    return axios.get('/energy/getFishAndAgricultural');
  },
  // 全年水产品总产量
  aquaticProductsTotal() {
    return axios.get('/energy/getAquaticProductsTotal');
  },
  // 企业注册注销数量
  companyRegisterCancelNum() {
    return axios.get('/energy/getCompanyRegisterCancelNum');
  },
  // 企业类型分布
  typeDistribution() {
    return axios.get('/energy/getTypeDistribution');
  },
  // 企业数量
  companyNum() {
    return axios.get('/energy/getCompanyNum');
  },
};
