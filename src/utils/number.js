import { round } from 'lodash';

export function getDigitNum(num = 0) {
  const arr = num.toString().split('.');
  const bit = arr[1] && arr[1].length;
  if (typeof bit !== 'number') {
    return 0;
  }
  return bit;
}

// 数字每隔三位加逗号分开
export function addCommas(nStr) {
  nStr += '';
  const x = nStr.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

export function unitNum(num) {
  return num < 1e4 ? { value: num, unit: '' }
    : num < 1e8 ? { value: num / 1e4, unit: '万' }
      : { value: num / 1e8, unit: '亿' };
}

//  用于将过大的数字改成以万/亿为单位，并根据type切换以改变他们原有的单位
export function cutNumberUnit(num, unit = '', type = 'number', precision = 2) {
  const number = num * 1;
  if (number >= 10000 && number < 100000000) {
    if (type === 'number') {
      return round(number / 10000, precision);
    } else {
      return '万' + unit;
    }
  } else if (number >= 100000000) {
    if (type === 'number') {
      return round(number / 100000000, precision);
    } else {
      return '亿' + unit;
    }
  } else {
    return type === 'number' ? round(number, precision) : unit;
  }
}
