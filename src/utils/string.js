export function uid(len = 5) {
  return Math.random().toString(36).substr(2, len);
}

export function pascalCase(name) {
  return name
    .split('-')
    .map((str) => str ? str.replace(str[0], str[0].toUpperCase()) : '')
    .join('');
}
