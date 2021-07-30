import MetroApi from '@/utils/http';

export const getSignature = (data) => {
  return new MetroApi({
    myType: 0,
    method: 'post',
    url: '/auth/signature',
    data: data,
  });
};
