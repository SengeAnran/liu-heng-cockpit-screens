import MetroApi from '@/utils/http';

// 获取人口迁入迁出信息
export const getInOut = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getInOut' });
};
