import request from '@/utils/request';

// 医院数量/医师数量分析
export const getHospitalAndDoctorInfo = (params) => {
  return request({
    url: '/medical/getHospitalAndDoctorInfo',
    method: 'get',
    params,
  });
};
