import MetroApi from '@/utils/http';
// 升学情况
export const getPromotionTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/education/getPromotionTrend' });
};

// 教师学历结构
export const getTeacherEducationTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/education/getTeacherEducationTrend' });
};

// 教师等级结构
export const getTeacherGradeTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/education/getTeacherGradeTrend' });
};

// 教师等级结构
export const getTeacherTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/education/getTeacherTrend' });
};

// 学校统计
export const getSchoolStatistics = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/education/getSchoolStatistics' });
};

// 学校统计-新
export const getPromotionTrendNew = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/education/getPromotionTrendNew' });
};

// 学校列表信息
export const getSchoolListByCategory = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/education/getSchoolListByCategory' });
};

// 学生情况
export const getStudentByCategory = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/education/getStudentByCategory' });
};
