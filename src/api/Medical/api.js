import MetroApi from '@/utils/http';

// 医院数量/医师数量分析
export const getHospitalAndDoctorInfo = (params) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getHospitalAndDoctorInfo',
    method: 'get',
    params,
  });
};

// 医务人员数量分布
export const getStaffNum = (params) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getStaffNum',
    method: 'get',
    params,
  });
};

// 人员职称结构
export const getCompetentTrend = (params) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getCompetentTrend',
    method: 'get',
    params,
  });
};

// 人员学历结构
export const getEducationTrend = (params) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getEducationTrend',
    method: 'get',
    params,
  });
};

// 医疗机构列表信息
export const getHospitalListByCategory = (params) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getHospitalListByCategory',
    method: 'get',
    params,
  });
};

// 疫苗接种趋势
export const getVaccinateTrend = (params) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getVaccinateTrend',
    method: 'get',
    params,
  });
};

// 疫苗接种点信息
export const getPlaceInfo = (params) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getPlaceInfo',
    method: 'get',
    params,
  });
};
// 门诊趋势
export const getOutpatientService = (params) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getOutpatientService',
    method: 'get',
    params,
  });
};
// 隔离点信息
export const getIsolationPlaceInfo = (params) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getIsolationPlaceInfo',
    method: 'get',
    params,
  });
};

// 隔离点人数趋势图
export const getIsolatedPointNum = (params) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getIsolatedPointNum',
    method: 'get',
    params,
  });
};
