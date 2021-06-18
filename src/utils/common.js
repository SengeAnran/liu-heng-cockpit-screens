//  16进制和rgb颜色转换为rgb格式字符串
export function colorHex2RGB(color = '', isArray = false) {
  const regRGB = /^(rgb|RGB)/;
  const regHex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  if (color) {
    if (regRGB.test(color)) {
      const rgbStr = color.replace(/(?:\(|\)|rgb|RGB)*/g, '');
      return rgbStr;
    } else if (regHex.test(color)) {
      const lowerColor = color.toLowerCase();
      const rgbStr = parseInt('0x' + lowerColor.slice(1, 3)) + ',' + parseInt('0x' + lowerColor.slice(3, 5)) + ',' + parseInt('0x' + lowerColor.slice(5, 7));
      return rgbStr;
    } else {
      return color;
    }
  } else {
    return color;
  }
}

//  求一个对象数组中 某个key的总和
//  比如[{a: 1, b: 2}, {a: 4, b: 5}, {a: 6, b: 6}] 求所有该数组中b的总和
export function getAarryKeyTotal(array, key) {
  return (array.reduce((prev, next) => {
    return {
      [key]: prev[key] + next[key],
    };
  }))[key];
}

export function maxValue(array, key) {
  return Math.max(...array.map((d) => d[key]));
}

export function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
