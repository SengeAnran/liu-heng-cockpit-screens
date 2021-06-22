import MetroApi from '@/utils/http';

// 投资增速分析
export const analysisOfInvestmentGrowth = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/analysisOfInvestmentGrowth',
    method: 'get',
    data,
  });
};

// 资金占比分析
export const capitalRatioAnalysis = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/capitalRatioAnalysis',
    method: 'get',
    data,
  });
};

// 项目列表
export const itemsList = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/itemsList',
    method: 'get',
    data,
  });
};

// 重大项目
export const majorProjects = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/majorProjects',
    method: 'get',
    data,
  });
};
// 重大项目计划
export const majorProjectsPlan = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/majorProjectsPlan',
    method: 'get',
    data,
  });
};
// 项目开工情况
export const projectCommencement = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/projectCommencement',
    method: 'get',
    data,
  });
};

// 项目行业行业分布
export const projectIndustryDistribution = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/projectIndustryDistribution',
    method: 'get',
    data,
  });
};
// 项目许可情况
export const projectPermission = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/projectPermission',
    method: 'get',
    data,
  });
};

// 项目投资实时情况
export const realtimeInvestment = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/realtimeInvestment',
    method: 'get',
    data,
  });
};

// 区域项目信息
export const regionalProjectInformation = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/project/management/regionalProjectInformation',
    method: 'get',
    data,
  });
};
