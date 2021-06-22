import MetroApi from '@/utils/http';

// 创新公司详情
export const getCompanyList = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/innovation/getCompanyList' });
};

// 申报产业领域
export const getIndustrialField = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/innovation/getIndustrialField' });
};

// 专利权重分析
export const getPatentAnalysisTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/innovation/getPatentAnalysisTrend' });
};

// 发明专利列表
export const getPatentList = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/innovation/getPatentList' });
};

// 专利数量
export const getPatentNum = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/innovation/getPatentNum' });
};

// 专利数量趋势
export const getPatentNumTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/innovation/getPatentNumTrend' });
};

// 人才专利发明图片
export const getPatentPicList = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/innovation/getPatentPicList' });
};

// 人才类型分布
export const getPersonTypeTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/innovation/getPersonTypeTrend' });
};
