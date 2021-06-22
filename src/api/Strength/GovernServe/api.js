import MetroApi from '@/utils/http';

// 预约情况分析
export const getAppointmentAnalysis = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/appointmentAnalysis' });
};

// 预约趋势
export const getBookingTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/bookingTrend' });
};

// 政务大厅信息
export const getInfoGovernment = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/informationOfGovernment' });
};
// 实时预约情况
export const getRealtimeBooking = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/realtimeBooking' });
};
// 实时评价分析情况
export const getEvaluationSituation = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/realtimeEvaluationAndAnalysisSituation' });
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
