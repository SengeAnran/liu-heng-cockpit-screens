export function deepMergeOne(target, source) {
  if (typeof source !== 'object' || typeof target !== 'object') {
    return target;
  }
  Object.keys(source).forEach((key) => {
    const sourceValue = source[key];
    if (typeof sourceValue !== 'object') {
      target[key] = sourceValue;
      return;
    }
    if (typeof target[key] !== 'object') {
      target[key] = Array.isArray(sourceValue) ? [] : {};
    }
    deepMergeOne(target[key], sourceValue);
  });
  return target;
}

export function deepMerge(target, ...sources) {
  return sources.reduce(deepMergeOne, target);
}

export function deepEqual(from, to) {
  if (from === to) {
    return true;
  }
  const typeFrom = typeof from;
  const typeTo = typeof to;
  if (typeFrom !== typeTo || typeFrom !== 'object') {
    return false;
  }

  if (Array.isArray(from) && Array.isArray(to)) {
    return from.length === to.length && from.every((item, i) => deepEqual(item, to[i]));
  }

  if (Array.isArray(from) || Array.isArray(to)) {
    return false;
  }

  const fromKeys = Object.keys(from);
  const toKeys = Object.keys(to);

  return fromKeys.length === toKeys.length && fromKeys.every((key) => deepEqual(from[key], to[key]));
}
