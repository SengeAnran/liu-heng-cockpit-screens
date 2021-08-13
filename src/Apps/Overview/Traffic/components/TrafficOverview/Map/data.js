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
