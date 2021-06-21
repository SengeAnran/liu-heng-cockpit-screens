export function colorIndex(colors) {
  const list = Array.isArray(colors) ? colors : [colors];
  return (index) => {
    return list[index % list.length];
  };
}
