import MetroApi from '@/utils/http';

// 运输货物城市分布
export const distributionOfTransportGoodsInCities = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/port/economy/distributionOfTransportGoodsInCities' });
};

// 运输货物分类占比
export const proportionOfCargoTransportedByCategory = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/port/economy/proportionOfCargoTransportedByCategory' });
};

// 码头吞吐情况
export const terminalHandlingSituation = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/port/economy/terminalHandlingSituation' });
};

// 码头吞吐量分析
export const terminalThroughputAnalysis = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/port/economy/terminalThroughputAnalysis' });
};

// 主要商品贸易占比TOP5
export const topFiveMajorCommodityTradeAccounted = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/port/economy/topFiveMajorCommodityTradeAccounted' });
};

// 六横航运贸易总额
export const totalShippingTrade = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/port/economy/totalShippingTrade' });
};

// 主要城市贸易额排名TOP10
export const tradeVolumeOfMajorCitiesRanked = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/port/economy/tradeVolumeOfMajorCitiesRanked' });
};
