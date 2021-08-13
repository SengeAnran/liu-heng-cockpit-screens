import { centroid, getCoord } from '@turf/turf';
export function getPopupPostion(feature) {
  const { type, coordinates } = feature.geometry;
  if (type === 'Point') {
    return coordinates;
  }
  // console.log(getCoord(center(feature)));
  return getCoord(centroid(feature));
}
