export default function getOptions(data) {
  const total = data.reduce((pre, d) => pre + d.value, 0);
  const center = ['26%', '57%'];
  return {
    color: ['#6182AE', '#66CCFF', '#31EABC', '#EDC063'],
    legend: {
      icon: 'circle',
      itemWidth: 21,
      itemHeight: 21,
      itemGap: 31,
      left: '51%',
      top: '36%',
      orient: 'vertical',
      textStyle: {
        color: '#fff',
        padding: [0, 0, 0, 8],
        rich: {
          name: {
            fontSize: 29,
            fontFamily: 'Source Han Sans CN',
            fontWeight: 400,
            color: '#FFFEFE',
            width: 140,
          },
          value: {
            fontSize: 29,
            fontFamily: 'Source Han Sans CN',
            fontWeight: 400,
            color: '#FFFEFE',
            width: 70,
            align: 'right',
          },
          percent: {
            fontSize: 29,
            fontFamily: 'DINPro',
            fontWeight: 400,
            color: '#fff',
            width: 110,
            align: 'right',
          },
        },
      },
      bottom: 26,
      formatter: function (name) {
        const item = data.find((d) => d.name === name);
        const percent = (item.value / total * 100).toFixed(1);
        return [`{name|${name}}`, `{value|${item.value}家}`, `{percent|${percent}%}`].join('');
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['44%', '58%'],
        center,
        label: {
          // show: false,
          position: 'center',
          formatter: '企业类型\n分布',
          color: '#fff',
          fontSize: 34,
          lineHeight: 46,
          verticalAlign: 'bottom',
          fontFamily: 'Oswald',
          fontWeight: 'bold',
        },
        data,
      },
      {
        type: 'pie',
        center,
        radius: ['39%', '64%'],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#3551A45c',
            }, {
              offset: 0.5,
              color: '#3D8EC45c',
            }, {
              offset: 1,
              color: '#5ECDB05c',
            }],
            global: false,
          },
        },
        scale: false,
        label: {
          show: false,
        },
        data: [1],
        z: -1,
      },
    ],
  };
}
