import MetroApi from '@/utils/http';

// 获取户籍人口信息
export const getResidenceTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getResidenceTrend' });
};

// 获取流动人口信息
export const getFlowTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getFlowTrend' });
};

// 获取人口迁入信息排名
export const getPopIn = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getPopIn' });
};

// 获取人口迁出信息排名
export const getPopOut = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getPopOut' });
};

// 获取户籍人口年龄分布
export const getAgeDistribution = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getAgeDistribution' });
};

// 获取户籍人口学历占比
export const getEducation = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getEducation' });
};

// 获取户籍人口婚龄单身比
export const getMarriedSingle = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getMarriedSingle' });
};

// 获取户籍人口工作占比
export const getWrok = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getWrok' });
};
