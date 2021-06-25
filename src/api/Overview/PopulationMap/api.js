import MetroApi from '@/utils/http';

// 获取户籍人口信息
export const getNewPopulationTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getNewPopulationTrend' });
};

// 获取户籍人口性别
export const getPopuliationBySex = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getPopuliationBySex' });
};

// 获取户籍人口排名
export const getPopuliationNumRank = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getPopuliationNumRank' });
};

// 获取出生与死亡情况
export const getBornAndDeathByYear = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getBornAndDeathByYear' });
};

// 获取劳动资源情况
export const getLabourByYear = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getLabourByYear' });
};

// 获取自然增长情况
export const getNaturalGrowth = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getNaturalGrowth' });
};

// 获取财政供给人员情况
export const getFinancialSupportNum = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getFinancialSupportNum' });
};
