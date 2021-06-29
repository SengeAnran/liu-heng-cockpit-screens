import MetroApi from '@/utils/http';
// 按年度查询基本信息
export const getBasicInfoByYear = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getBasicInfoByYear' });
};

// 按年度查询基本信息
export const getAreaInfo = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getAreaInfo' });
};

// 人口年龄性别比例
export const getAgeAndSexyTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getAgeAndSexyTrend' });
};

// 地图的数据
export const getMapData = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getBasicInfoByYear' });
};

// 地图的数据
export const getCommunityInfo = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getCommunityInfo' });
};

// 获取人口组成信息-指标
export const getPopulationTarget = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getPopulationTarget' });
};

// 人口组成情况-图表
export const getPopulationTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getPopulationTrend' });
};

// 城市面积分布情况
export const getAreaDistribution = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getAreaDistribution' });
};

// 城市面积分布情况
export const getAreaStatisticsByYear = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getAreaStatisticsByYear' });
};

// 企业进出口总额
export const getExportImportTotal = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getExportImportTotal' });
};

// 财政总收入和公共预算
export const getFinancePublicTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getFinancePublicTrend' });
};

// gdp增速
export const getGdpSpeed = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getGdpSpeed' });
};

// 工业
export const getIndustryValueTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getIndustryValueTrend' });
};

// 人均可支配收入
export const getPCDI = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getPCDI' });
};

// 人口组成
export const getPoputionForm = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getPoputionForm' });
};

// 旅游
export const getTourNumAndIncomeTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getTourNumAndIncomeTrend' });
};
