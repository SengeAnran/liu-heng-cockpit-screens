import MetroApi from '@/utils/http';

// 获取监察执法
export const getLawOper = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/safety/getLawOper' });
};

// 获取事件涉及行业排名
export const getIndustryRank = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/safety/getIndustryRank' });
};

// 获取部门办理
export const getDeptType = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/safety/getDeptType' });
};

// 获取信访投诉方式占比
export const getComplainTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/safety/getComplainTrend' });
};

// 获取社会满意度
export const getSatisfactionTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/safety/getSatisfactionTrend' });
};
