import MetroApi from '@/utils/http';

// 获取人口迁入信息
export const getPopIn = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/population/getPopIn' });
};
