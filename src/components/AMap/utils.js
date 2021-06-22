export function getPopupPostion(feature) {
  const { type, coordinates } = feature.geometry;
  if (type === 'Point') {
    return coordinates;
  }
}
