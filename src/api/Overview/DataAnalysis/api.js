import MetroApi from '@/utils/http';

// 中枢之岛
export const getCentre = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/data/getCentre' });
};

// 奋斗之岛
export const getFight = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/data/getFight' });
};

// 宜居之岛
export const getGoodLivingInfo = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/data/getGoodLivingInfo' });
};

// 产业之岛
export const getIndustry = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/data/getIndustry' });
};

// 制造之岛
export const getProduce = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/data/getProduce' });
};

// 平安之岛
export const getSafety = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/data/getSafety' });
};
