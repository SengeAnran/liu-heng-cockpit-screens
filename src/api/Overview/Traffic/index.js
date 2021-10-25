import service from '@/api/request';

// **************** 交通概况 *********
// 公路桥隧
export const getStatistics = () => {
  return service.request({
    method: 'get',
    url: '/traffic/v2/getStatistics',
  });
};
// 道路运营
export const getRoadTransport = () => {
  return service.request({
    method: 'get',
    url: '/traffic/v2/getRoadTransport',
  });
};
  // 水路信息航线信息
export const getWaterwayRoute = () => {
  return service.request({
    method: 'get',
    url: '/traffic/v2/getWaterwayRoute',
  });
};
  // 水路信息客运信息
export const getWaterwayTransport = () => {
  return service.request({
    method: 'get',
    url: '/traffic/v2/getWaterwayTransport',
  });
};
  // 道路货运及维修
export const getRoadMaintain = () => {
  return service.request({
    method: 'get',
    url: '/traffic/v2/getRoadMaintain',
  });
};
  // 道路监控
export const getRoadMonitor = () => {
  return service.request({
    method: 'get',
    url: '/traffic/getRoadMonitor',
  });
};
// ****************************公路桥隧
// 县道
export const getCountryRoad = () => {
  return service.request({
    method: 'get',
    url: '/traffic/v2/getCountryRoad',
  });
};
// 村道
export const getVillageRoad = () => {
  return service.request({
    method: 'get',
    url: '/traffic/v2/getVillageRoad',
  });
};
// 隧道
export const getTunnel = () => {
  return service.request({
    method: 'get',
    url: '/traffic/v2/getTunnel',
  });
};
// 桥梁
export const getBridge = () => {
  return service.request({
    method: 'get',
    url: '/traffic/v2/getBridge',
  });
};
// // 县道
// export const getCountryRoad = () => {
//   return service.request({
//     method: 'get',
//     url: '/traffic/v2/getCountryRoad',
//   });
// };
