import MetroApi from '@/utils/http';

// 医院数量/医师数量分析
export const getHospitalAndDoctorInfo = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getHospitalAndDoctorInfo',
    method: 'get',
    data,
  });
};

// 医务人员数量分布
export const getStaffNum = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getStaffNum',
    method: 'get',
    data,
  });
};

// 人员职称结构
export const getCompetentTrend = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getCompetentTrend',
    method: 'get',
    data,
  });
};

// 人员学历结构
export const getEducationTrend = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getEducationTrend',
    method: 'get',
    data,
  });
};

// 医疗机构列表信息
export const getHospitalListByCategory = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getHospitalListByCategory',
    method: 'get',
    data,
  });
};

// 疫苗接种趋势
export const getVaccinateTrend = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getVaccinateTrend',
    method: 'get',
    data,
  });
};

// 疫苗接种点信息
export const getPlaceInfo = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getPlaceInfo',
    method: 'get',
    data,
  });
};
// 门诊趋势
export const getOutpatientService = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getOutpatientService',
    method: 'get',
    data,
  });
};
// 隔离点信息
export const getIsolationPlaceInfo = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getIsolationPlaceInfo',
    method: 'get',
    data,
  });
};

// 隔离点人数趋势图
export const getIsolatedPointNum = (data) => {
  return new MetroApi({
    myType: 0,
    url: '/medical/getIsolatedPointNum',
    method: 'get',
    data,
  });
};
