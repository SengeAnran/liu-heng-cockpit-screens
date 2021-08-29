import Vue from 'vue';
export function formatDate(date, fmt) {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'H+': date.getHours(), // 小时
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  // var week = {
  //   '0' : "日",
  //   '1' : "一",
  //   '2' : "二",
  //   '3' : "三",
  //   '4' : "四",
  //   '5' : "五",
  //   '6' : "六"
  // };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '星期' : '周') : ''));
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
//
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
// filter过滤器（必须先引入Vue.js）
Vue.filter('dateFormat', function (date, format = 'yyyy-MM-dd HH:mm:ss') {
  return formatDate(date, format);
});
