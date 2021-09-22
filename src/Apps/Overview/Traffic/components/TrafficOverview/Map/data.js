import { featureCollection, point } from '@turf/turf';
export const busStation = featureCollection([
  point([122.12696, 29.74765], { name: '长途车站' }),
]);

export const wharf = featureCollection([
  point([122.098795, 29.720379], { name: '积峙码头' }),
  point([122.199909, 29.708838], { name: '台门码头' }),
  point([122.134757, 29.769469], { name: '大岙码头' }),
  point([122.180849, 29.726472], { name: '西文山码头' }),
]);

export const island = featureCollection([
  point([122.132353, 29.723486], { name: '六横岛' }),
  point([122.024097, 29.738171], { name: '佛渡岛' }),
  point([122.220185, 29.703787], { name: '悬山岛' }),
]);
export const weixian = featureCollection([
  point([122.11805556, 29.75277778], { name: '坤巍物流有限公司' }),
  point([122.08416667, 29.76111111], { name: '欣达气体有限公司' }),
]);
export const qixiuchang = featureCollection([
  point([122.14027778, 29.73277778], { name: '顺顺汽修厂' }),
  point([122.12888889, 29.74944444], { name: '绿港汽修厂' }),
  point([122.115, 29.75444444], { name: '鼎杰汽修厂' }),
]);

