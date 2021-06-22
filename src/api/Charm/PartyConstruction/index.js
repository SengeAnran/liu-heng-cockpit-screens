import MetroApi from '@/utils/http';

// 党员基本情况
export const peopleBasicInfo = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/peopleBasicInfo' });
};

// 党员缴纳情况
export const partyFeeSituation = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/partyFeeSituation' });
};

// 党建文件
export const partyDocument = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/partyDocument' });
};

// 党群建设情况
export const partyConstruct = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/partyConstruct' });
};

// 群团宣传情况
export const publicitySituation = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/publicity' });
};

// 工会维权统计
export const protectRights = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/rights' });
};

// 党群建设
export const partyBuild = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/statistic' });
};

// 劳动竞赛
export const workCompetition = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/workCompetition' });
};
