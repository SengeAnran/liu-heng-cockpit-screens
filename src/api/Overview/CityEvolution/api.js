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
