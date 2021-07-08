import MetroApi from '@/utils/http';

// 港口信息
export const getPortDetail = () => {
  return new MetroApi({ myType: 0, url: '/api/v2/port/economy/getPortInformation' });
};
// 货运船舶运力
export const getCargoShipCapacity = () => {
  return new MetroApi({ myType: 0, url: '/api/v2/port/economy/getCargoShipCapacity' });
};
// 港口货运吞吐量
export const getPortThroughput = () => {
  return new MetroApi({ myType: 0, url: '/api/v2/port/economy/getPortThroughput' });
};
// 煤炭进出口货运总量与增长率
export const getCoalImportAndExport = () => {
  return new MetroApi({ myType: 0, url: '/api/v2/port/economy/getCoalImportAndExport' });
};
// 油品进出口货运总量与增长率
export const getOilImportAndExport = () => {
  return new MetroApi({ myType: 0, url: '/api/v2/port/economy/getOilImportAndExport' });
};
// 外贸进出口总额与增速
export const getForeignTradeImportAndExport = () => {
  return new MetroApi({ myType: 0, url: '/api/v2/port/economy/getForeignTradeImportAndExport' });
};
// 出口总额及增速
export const getTotalExportsAndGrowthRates = () => {
  return new MetroApi({ myType: 0, url: '/api/v2/port/economy/getTotalExportsAndGrowthRates' });
};
// 进口总额及增速
export const getTotalImportsAndGrowthRates = () => {
  return new MetroApi({ myType: 0, url: '/api/v2/port/economy/getTotalImportsAndGrowthRates' });
};
// 主要企业进出口总额
export const getMajorEnterprisesImports = () => {
  return new MetroApi({ myType: 0, url: '/api/v2/port/economy/getMajorEnterprisesImports' });
};

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
