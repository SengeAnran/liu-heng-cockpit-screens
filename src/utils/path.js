export function topDir(path) {
  const nextSlashIndex = path.indexOf('/', 1);
  if (nextSlashIndex > -1) {
    return path.substr(0, nextSlashIndex || Infinity);
  }
  return path;
}

export function resolve(relative, base, append = true) {
  const firstChar = relative.charAt(0);
  if (firstChar === '/' || relative.startsWith('http:') || relative.startsWith('https:')) {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  const stack = base.split('/');

  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  const segments = relative.replace(/^\//, '').split('/');
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  if (stack[0] !== '' && !stack[0].startsWith('http:') && !stack[0].startsWith('https:')) {
    stack.unshift('');
  }

  return stack.join('/');
}
