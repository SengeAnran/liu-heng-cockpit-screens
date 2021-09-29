import MetroApi from '@/utils/http';

// 社区概述
export const getCommunityInfo = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/community/communityInfo',
    method: 'get',
    data,
    header: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
};

// 社区地图点位
export const getLocation = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/community/location',
    method: 'get',
    data,
    header: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
};

// 年龄分布
export const getAgeDistribution = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/community/ageDistribution',
    method: 'get',
    data,
  });
};

// 学历分布
export const getEduDistribution = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/community/eduDistribution',
    method: 'get',
    data,
  });
};

// 五类老人
export const getOldPeople = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/community/oldPeople',
    method: 'get',
    data,
  });
};

// 乡村规划
export const getPlanning = () => {
  return new MetroApi({
    myType: 0,
    url: '/community/planning',
    method: 'get',
  });
};

// 居民情况
export const getResidentInfo = () => {
  return new MetroApi({
    myType: 0,
    url: '/community/residentInfo',
    method: 'get',
  });
};

// 村民信息
export const getVillagerInfo = () => {
  return new MetroApi({
    myType: 0,
    url: '/community/villagerInfo',
    method: 'get',
  });
};

// 村民用水用电趋势
export const getWaterElectTrend = () => {
  return new MetroApi({
    myType: 0,
    url: '/community/waterElectTrend',
    method: 'get',
  });
};
