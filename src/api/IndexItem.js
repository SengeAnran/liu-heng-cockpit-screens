import MetroApi from '../utils/http';
// 底部指标
export const getBottom = (data) => {
  return new MetroApi({ myType: 0, method: 'get', url: '/indexSummary/getBottom', data });
};
// 底部指标
export const getVillageBottom = (data) => {
  return new MetroApi({ myType: 0, method: 'get', url: '/community/getBottomInfo', data });
};
// *************************************
// 底部总览指标
export const getBottomInfo = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/city/getBottomInfo' });
};
// *******************魅力六横
// 党员基本情况
export const peopleBasicInfo = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/peopleBasicInfo' });
};

// 数字社区 老的
export const getVillagerInfo = () => {
  return new MetroApi({
    myType: 0,
    url: '/community/coreIndicator',
    method: 'get',
  });
};

// 数字社区 新的
export const getCommunityBottomInfo = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/community/getBottomInfo',
    method: 'get',
    data,
  });
};

export const getLocation = () => {
  return new MetroApi({
    myType: 0,
    url: '/community/location',
    method: 'get',
  });
};
// *******************实力六横
// 实时办理情况
export const getRealtimeHandling = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/realtimeHandling' });
};

// 项目投资实时情况
export const realtimeInvestment = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/realtimeInvestment',
    method: 'get',
    data,
  });
};
// 获取全县空气质量状况
export const getCountyAirQualityStatus = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/environmental/project/countyAirQualityStatus' });
};
// 事件态势
export const eventSituation = () => {
  return new MetroApi({
    myType: 0,
    url: '/opinion/analysis/eventSituation',
    method: 'get',
  });
};
// *****************活力六横
// 经济发展
export const getEconomicDevelopmentIndicator = () => {
  return new MetroApi({
    myType: 0,
    url: '/energy/getEconomicDevelopmentIndicator',
    method: 'get',
  });
};
// 港口经济
export const getGkjjGoal = () => {
  return new MetroApi({
    myType: 0,
    url: '/api/v2/port/economy/getGkjjGoal',
    method: 'get',
  });
};
