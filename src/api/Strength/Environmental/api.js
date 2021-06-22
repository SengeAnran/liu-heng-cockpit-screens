import MetroApi from '@/utils/http';

// 获取全县空气质量状况
export const getCountyAirQualityStatus = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/countyAirQualityStatus' });
};

// 获取空气质量变化趋势
export const getAirQualityTrends = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/airQualityTrends' });
};

// 获取涉气污染源检测
export const gasPollutionSourceDetection = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/gasPollutionSourceDetection' });
};

// 获取涉气污染源排放
export const getGasrelatedSources = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/emissionsFromGasrelatedSources' });
};

// 获取涉气污染源减排
export const getGasPollutionSources = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/emissionReductionOfGasPollutionSources' });
};

// 获取污染企业(地图)
export const getWaterPollutionSourceDetection = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/waterPollutionSourceDetection' });
};

// 获取饮用水源地水质情况
export const getDrinkingWaterSources = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/waterQualityOfDrinkingWaterSources' });
};

// 获取污染企业
export const getPollutingEnterprises = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/pollutingEnterprises' });
};

// 获取每月污水排放
export const getMonthlySewage = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/monthlySewageDischarge' });
};

// 获取危险废物源管理
export const getWasteControl = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/hazardousWasteControl' });
};

// 获取行政处罚
export const getPenaltyForPollution = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/administrativePenaltyForPollution' });
};
